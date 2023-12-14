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
		const rePassword = formData.get('rePassword');

		if (typeof username !== 'string' || username.length < 4 || username.length > 31) {
			return fail(400, { message: 'Invalid username' });
		}

		if (typeof password !== 'string' || password.length < 6 || password.length > 255) {
			return fail(400, { message: 'Invalid password' });
		}

		if (password !== rePassword) {
			return fail(400, { message: 'Passwords didn`t match' });
		}

		try {
			const user = await auth.createUser({
				key: {
					providerId: 'username',
					providerUserId: username.toLowerCase(),
					password
				},
				attributes: {
					username
				}
			});

			const session = await auth.createSession({
				userId: user.userId,
				attributes: {}
			});

			locals.auth.setSession(session);
		} catch (e) {
			if (e.message === 'USER_TABLE_UNIQUE_CONSTRAINT_ERROR') {
				return fail(400, { message: 'Username already taken' });
			}
			return fail(500, { message: 'An unknown error occurred' });
		}

		throw redirect(302, '/admin');
	}
};
