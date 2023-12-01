import { writeFile } from 'node:fs/promises';
import { extname } from 'path';
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	const formData = await request.formData();
  const uploadedFile = formData.get('file');
  const filename = `static/uploads/${crypto.randomUUID()}${extname(uploadedFile?.name)}`;
  await writeFile(filename, Buffer.from(await uploadedFile?.arrayBuffer()));
  const url = filename.replace('static', '');

	return json({ url: url, href: `${url}?content-disposition=attachment` });
}
