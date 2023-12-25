import { auth } from '$lib/server/lucia';
import { fail, redirect } from '@sveltejs/kit';

export async function load({ locals }) {
	const session = await locals.auth.validate();

	if (session) {
		throw redirect(302, '/');
	}

	return {};
}

export const actions = {
	default: async ({ request, locals }) => {
		const formData = await request.formData();
		const username = formData.get('username');
		const password = formData.get('password');

		try {
			const key = await auth.useKey('username', username.toLowerCase(), password);
			const session = await auth.createSession({ userId: key.userId, attributes: {} });
			locals.auth.setSession(session);
		} catch (err) {
			if (err.message === 'AUTH_INVALID_KEY_ID' || err.message === 'AUTH_INVALID_PASSWORD') {
				return fail(400, { message: 'Incorect username or password' });
			}

			return fail(500, { massage: 'An unknown error occured' });
		}

		throw redirect(302, '/admin');
	}
};
