import { db } from './db';

/**
 * @typedef {Object} ArticleType
 * @property {number} [id] - article id can be empty when creating new article
 * @property {string} title
 * @property {number} categoryID - foreng key to categories table
 * @property {number} status - 0 - disabled 1 - active
 * @property {string} [description] - can be empty
 * @property {string} [thumbnail]
 */

/**
 *
 * @returns {ArticleType[] | []}
 */
export async function getAllArticles() {
	try {
		const res = await db.article.findMany({
			include: {
				category: {
					select: {
						name: true
					}
				}
			}
		});

		return res;
	} catch (err) {
		console.log(err);
		return [];
	}
}

/**
 * 
 * @returns {number} - total amount of the articles
 */
export async function countArticles() {
	try {
		const res = await db.article.count();

		return res;
	} catch(err) {
		console.log(err);
		return 0;
	}
}

/**
 *
 * @param {number} take - amount of articles to laod at first display
 * @returns {ArticleType[] | []}
 */
export async function getFirstArticles(take) {
	try {
		const res = await db.article.findMany({
			take: take,
			include: {
				category: {
					select: {
						name: true
					}
				}
			},
			orderBy: {
				id: 'desc'
			}
		});

		return res;
	} catch (err) {
		console.log(err);
		return [];
	}
}

export async function loadNextArticlesByCursor(take, lastId) {
	try {
		const res = await db.article.findMany({
			take: take,
			skip: 1,
			cursor: {
				id: lastId
			},
			orderBy: {
				id: 'desc'
			}
		});

		return res;
	} catch (err) {
		console.log(err);
		return [];
	}
}

/**
 *
 * @param {ArticleType} data
 * @returns {boolean}
 */
export async function addArticle(data) {
	try {
		await db.article.create({
			data: {
				title: data.title,
				categoryId: data.categoryID,
				status: data.status,
				description: data.description,
				thumbnail: data.thumbnail
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
 * @param {ArticleType} data
 * @returns {boolean}
 */
export async function updateOneArticle(data) {
	try {
		await db.article.update({
			where: {
				id: data.id
			},
			data: {
				title: data.title,
				categoryId: data.categoryID,
				description: data.description,
				status: data.status,
				thumbnail: data.thumbnail
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
 * @param {number} id
 * @returns {ArticleType}
 */
export async function getOneArticle(id) {
	try {
		const res = await db.article.findUnique({
			where: {
				id: id
			}
		});

		return res;
	} catch (err) {
		console.log(err);
		return null;
	}
}

/**
 *
 * @param {number} id
 * @returns {boolean}
 */
export async function deleteArticle(id) {
	try {
		await db.article.delete({
			where: {
				id: id
			}
		});

		return true;
	} catch (err) {
		console.log(err);
		return false;
	}
}
