const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const connection = require("../../../db");
const Login = (req, res) => {
    const user = req.body;
    let query, data;
    const { username, email, phone } = req.body;
    if (email) {
        query = `SELECT User.email,User.user_id,User.username, User.password, Role.type FROM User Join Role on User.role_id =Role.role_id where email = ?`;
        data = email;
    } else if (username) {
        query = `SELECT User.username,User.email,User.user_id, User.password, Role.type FROM User Join Role on User.role_id =Role.role_id where username = ?`;
        data = username;
    } else {
        query = `SELECT  User.email, User.password,User.phone,User.user_id,User.username Role.type FROM User Join Role on User.role_id =Role.role_id where phone = ?`;
        data = phone;
    }
    connection.query(query, data, (err, result) => {
        if (err) throw err.sqlMessage;
        else {
            if (result.length) {
                bcrypt.compare(user.password, result[0].password, (err, output) => {
                    if (output) {
                        payloads = {
                            username: result[0].username,
                            user_id: result[0].user_id,
                            email: result[0].email,
                            permissions: result[0].type,
                        };
                        options = {
                            expiresIn: process.env.TOKEN_EXPIRATION,
                        };
                        res.json(jwt.sign(payloads, process.env.SECRET, options));
                    } else res.json({
                        "error": {
                            "status": 401,
                            "message": "password is incorrect"
                        }
                    });
                });
            } else res.json({
                "error": {
                    "status": 401,
                    "message": "Invalid login"
                }
            });
        }
    });
};
module.exports = Login;