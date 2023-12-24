// /src/lib/types.d.ts

export type Article = {
  id?: number,
  title: string,
  categoryID: number,
  status: number,
  description?: string,
  thumbnail?: string,
}

export type Category = {
  id?: number,
  name: string
}
