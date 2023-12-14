import { db } from './db';

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
		const res = await db.category.findMany();

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
		await db.category.create({
			data: {
				name: name
			}
		});

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
		await db.category.update({
			where: {
				id: data.id
			},
			data: {
				name: data.name
			}
		});

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
		const res = await db.category.findUnique({
			where: {
				id: id
			}
		});

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
		await db.article.delete({
			where: {
				id: id
			}
		});

		return true;
	} catch (err) {
		return false;
	}
}
