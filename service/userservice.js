
const { pool } = require('../models/models');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const { token } = require('morgan');
const dotenv = require("dotenv").config();

class userDetails {
    async save(username, password, usertype) {
        let data = [username, password, usertype];
        try {
            let user_details = `SELECT User_name from user where User_name = ?`;
            let result = await pool.query(user_details, [username]);
            if (result.length != 0) {
                return result;
            }
            else {
                let detail = await pool.query("INSERT into user(User_name,Password,User_type) values(?)", [data]);
                return detail;
            }
        } catch (err) {
            return err;
        }
    }

    async loginUser(username, password) {
        try {

            let user_details = `SELECT * from user where User_name = ?`;
            let result = await pool.query(user_details, [username]);
            if (result.length > 0) {
                let Password = result[0].Password;
                const password_valid = await bcrypt.compare(password, Password);

                if (password_valid) {
                    const token = jwt.sign({ "id": result[0].User_id }, process.env.SECRET);
                    return { "token": token, "user_id": result[0].User_id, "user_type": result[0].User_type };
                } else {
                    return { "error": "Password Incorrect" };
                }
            } else {
                return { "error": "User does not exist" };
            }
        } catch (err) {
            return err;
        }
    }

}

module.exports = new userDetails();
