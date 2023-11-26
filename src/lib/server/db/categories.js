import { BLOG_DB_PATH } from '$env/static/private';
import Database from 'better-sqlite3';

const db = new Database(BLOG_DB_PATH);

/**
 * @typedef {Object} Category
 * @property {number} [rowid]
 * @property {string} name
 */

/**
 *
 * @returns {Category[]}
 */
export async function getAllCategories() {
	try {
		const sql = `SELECT rowid, name FROM categories`;
		const prepare = db.prepare(sql);
		const res = prepare.all();

		return res;
	} catch (err) {
		return [];
	}
}

/**
 *
 * @param {string} name
 * @returns {boolean}
 */
export async function addCategory(name) {
	try {
		const sql = 'INSERT INTO categories (name) VALUES (?)';
		db.prepare(sql).run(name);

		return true;
	} catch (err) {
		console.log(err);
		return false;
	}
}

/**
 *
 * @param {Category} data
 * @returns {boolean}
 */
export async function editCategory(data) {
	try {
		const sql = 'UPDATE categories SET name = @name WHERE rowid = @rowid';
		db.prepare(sql).run(data);

		return true;
	} catch (err) {
		return false;
	}
}

/**
 *
 * @param {number} id
 * @returns {Category}
 */
export async function getOneCategory(id) {
	try {
		const sql = 'SELECT rowid, name FROM categories WHERE rowid = ?';
		const res = db.prepare(sql).get(id);

		return res;
	} catch (err) {
		return null;
	}
}

/**
 *
 * @param {number} id
 * @returns {boolean}
 */
export async function deleteCategory(id) {
	try {
		const deleteSql = 'DELETE FROM categories WHERE rowid = ?';
		db.prepare(deleteSql).run(id);
    const updateArticleSQL = 'UPDATE articles SET categoryID = null WHERE categoryID = ?';
    db.prepare(updateArticleSQL).run(id);

		return true;
	} catch (err) {
		return false;
	}
}
