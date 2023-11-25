import { auth } from '$lib/server/lucia';
import { dbExist } from '$lib/server/db/init';
import { fail, redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
	const session = await locals.auth.validate();
	if (!session) throw redirect(302, '/signin');

	const inited = dbExist();

	return {
		userId: session.user.userId,
		username: session.user.username,
		inited
	};
};

export const actions = {
	logout: async ({ locals }) => {
		const session = await locals.auth.validate();
		if (!session) return fail(401);
		await auth.invalidateSession(session.sessionId); // invalidate session
		locals.auth.setSession(null); // remove cookie
		throw redirect(302, '/signin'); // redirect to login page
	}
};
