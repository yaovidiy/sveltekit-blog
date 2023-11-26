import { json } from "@sveltejs/kit";
import { init } from "$lib/server/db/init";

export const POST = async () => {
  const res = await init();

  return json(res);
}