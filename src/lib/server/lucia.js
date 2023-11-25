import { sveltekit } from 'lucia/middleware';
import { lucia } from 'lucia';
import { betterSqlite3 } from '@lucia-auth/adapter-sqlite';
import { USERS_DB_PATH } from '$env/static/private';
import { dev } from '$app/environment';
import Database from 'better-sqlite3';

const db = new Database(USERS_DB_PATH);

// expect error
export const auth = lucia({
	env: dev ? 'DEV' : 'PROD',
	middleware: sveltekit(),
	adapter: betterSqlite3(db, {
		user: 'user',
		key: 'user_key',
		session: 'user_session'
	}),
	getUserAttributes: (data) => {
		return {
			username: data.username
		};
	}
});
