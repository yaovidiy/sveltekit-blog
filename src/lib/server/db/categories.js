import { BLOG_DB_PATH } from '$env/static/private';
import Database from 'better-sqlite3';

const db = new Database(BLOG_DB_PATH);

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
