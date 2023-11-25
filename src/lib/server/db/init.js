import { BLOG_DB_PATH } from '$env/static/private';
import Database from 'better-sqlite3';

const db = new Database(BLOG_DB_PATH);

export async function init() {
	const createArticlesTable =
		'CREATE TABLE IF NOT EXISTS articles (title text, categoryID int, status int, description text)';
}

export async function dbExist() {
	const sql = "SELECT name FROM sqlite_master WHERE type='table' AND name='articles'";

	const prepare = db.prepare(sql);
	const res = prepare.all();

	return res;
}
