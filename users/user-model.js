  
const db = require("../database/config");

function get() {
  return db("users").select("id", "username");
}

function getBy(username) {
  return db("users").where(username);
}

async function add(user) {
  const [id] = await db("users").insert(user, "id");

  return getById(id);
}

function getById(id) {
  return db("users")
    .where({ id })
    .first();
}
module.exports = {
  add,
  get,
  getBy,
  getById,
};