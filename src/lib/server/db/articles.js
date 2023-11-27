import { BLOG_DB_PATH } from '$env/static/private';
import Database from 'better-sqlite3';

const db = new Database(BLOG_DB_PATH);

/**
 * @typedef {Object} ArticleType
 * @property {number} [rowid] - article id can be empty when creating new article
 * @property {string} title
 * @property {number} categoryID - foreng key to categories table
 * @property {number} status - 0 - disabled 1 - active
 * @property {string} [description] - can be empty
 * @property {string} [thumbnail]
 */

/**
 *
 * @returns {ArticleType[]}
 */
export async function getAllArticles() {
	try {
		const sql = `SELECT a.rowid, title, categoryID, status, c.name as category, thumbnail FROM articles AS a LEFT JOIN categories AS c ON a.categoryID = c.rowid`;

		const prepare = db.prepare(sql);

		const res = prepare.all();

		return res;
	} catch (err) {
		console.log(err);
		return [];
	}
}

/**
 *
 * @param {ArticleType} data
 * @returns {boolean}
 */
export async function addArticle(data) {
	try {
		const sql =
			'INSERT INTO articles (title, categoryID, status, thumbnail) VALUES (@title, @categoryID, @status, @thumbnail)';
		const prepare = db.prepare(sql);
		prepare.run(data);

		return true;
	} catch (err) {
		console.log(err);
		return false;
	}
}

/**
 *
 * @param {ArticleType} data
 * @returns {boolean}
 */
export async function updateOneArticle(data) {
	try {
		const sql =
			'UPDATE articles SET title = @title, thumbnail = @thumbnail, status = @status, categoryID = @categoryID, description = @description WHERE rowid = @rowid';
		db.prepare(sql).run(data);

		return true;
	} catch (err) {
		console.log(err);
		return false;
	}
}

/**
 *
 * @param {number} id
 * @returns {ArticleType}
 */
export async function getOneArticle(id) {
	try {
		const sql = `SELECT rowid, * FROM articles WHERE rowid = ?`;
		const result = db.prepare(sql).get(id);

		return result;
	} catch (err) {
		console.log(err);
		return null;
	}
}

/**
 *
 * @param {number} id
 * @returns {boolean}
 */
export async function deleteArticle(id) {
	try {
		const sql = 'DELETE FROM articles WHERE rowid = ?';
		db.prepare(sql).run(id);

		return true;
	} catch (err) {
		console.log(err);
		return false;
	}
}
