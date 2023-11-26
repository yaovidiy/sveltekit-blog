import { addCategory } from '$lib/server/db/categories.js'

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const name = formData.get('name');

    const res = await addCategory(name);

    return res;
  }
}