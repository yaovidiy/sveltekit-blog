import { BLOG_DB_PATH } from '$env/static/private';
import Database from 'better-sqlite3';

const db = new Database(BLOG_DB_PATH);

export async function init() {
	const articles =
		'CREATE TABLE IF NOT EXISTS articles (title text, categoryID int, status int, description text, thumbnail text)';

	const categories = `CREATE TABLE IF NOT EXISTS categories (name text)`;
	const articlesDB = db.prepare(articles).run();
	const categoryDB = db.prepare(categories).run();
	return {articlesDB, categoryDB};
}

export async function dbExist() {
	const sql = "SELECT name FROM sqlite_master WHERE type='table' AND name='articles'";

	const prepare = db.prepare(sql);
	const res = prepare.all();

	return res;
}
