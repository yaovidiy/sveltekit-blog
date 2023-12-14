import { put } from '@vercel/blob';

export default async function upload(inputFile) {
	const blob = await put(`images/${inputFile.name}`, inputFile, { access: 'public' });

  return blob;
}
