import { sveltekit } from 'lucia/middleware';
import { lucia } from 'lucia';
import { prisma } from "@lucia-auth/adapter-prisma";
import { dev } from '$app/environment';
import { db } from '$lib/server/db/db';

// expect error
export const auth = lucia({
	env: dev ? 'DEV' : 'PROD',
	middleware: sveltekit(),
	adapter: prisma(db, {
		user: "user", // model User {}
		key: "key", // model Key {}
		session: "session" // model Session {}
	}),
	getUserAttributes: (data) => {
		return {
			username: data.username
		};
	}
});
