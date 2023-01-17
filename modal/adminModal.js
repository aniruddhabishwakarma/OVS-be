const addData = "insert into admin(username,contact,email,password,picture) values ($1, $2, $3, $4, $5)";
const updateData = "update admin set username = $1, contact = $2, email = $3 where id = $4 returning *";
const updatePassword = "update admin set password = $1 where id = $2 returning *";
const getData = "select * from admin";

module.exports = {addData,updateData,getData,updatePassword};