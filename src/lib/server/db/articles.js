import { BLOG_DB_PATH } from '$env/static/private';
import Database from 'better-sqlite3';

const db = new Database(BLOG_DB_PATH);

export async function getAllArticles() {
  try {
    const sql = `SELECT a.rowid, title, categoryID, status, c.name as category FROM articles AS a INNER JOIN categories AS c ON a.categoryID = c.rowid`;
    
    const prepare = db.prepare(sql);
  
    const res = prepare.all();
  
    console.log(res);
    return res;

  } catch(err) {
    console.log(err);
    return [];
  }
}

export async function addArticle(data) {
  try {
    console.log(data);
    const sql = 'INSERT INTO articles (title, categoryID, status) VALUES (@title, @categoryID, @status)'
    const prepare = db.prepare(sql);
    const result = prepare.run(data);

    console.log(result)
    return result;
  } catch(err) {
    console.log(err);
    return null;
  }
}

export async function updateOneArticle(data) {
  try {
    const sql = 'UPDATE articles SET title = @title, status = @status, categoryID = @categoryID, description = @description WHERE rowid = @rowid';
    const result = db.prepare(sql).run(data);
    
    console.log(result);
    return true;
  } catch(err) {
    console.log(err);
    return false;
  }
}

export async function getOneArticle(id) {
  try {
    const sql = `SELECT rowid, * FROM articles WHERE rowid = ?`;
    const result = db.prepare(sql).get(id)

    return result;
  } catch(err) {
    console.log(err);
    return null;
  }
}