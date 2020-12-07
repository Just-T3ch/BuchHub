const connection = require("../../db");
//Function that gets the user information from the database
const getUser = (req, res) => {
  const query = `SELECT * FROM user WHERE username=?`;
  const data = [req.body.username];
  console.log(data);
  connection.query(query, data, (err, result) => {
    if (err) throw err.sqlMessage;
    console.log(result);
    res.json(result);
  });
};
module.exports = getUser;
