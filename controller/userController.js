const { createPool } = require("mysql");

const { pool } = require('../models/models');

const userService = require('../service/userservice');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

module.exports.create = async (req, res, next) => {
    const salt = await bcrypt.genSalt(10);
    let userName = req.body.username;
    let Password = await bcrypt.hash(req.body.password, salt);
    let userType = req.body.usertype;
    created_user = await userService.save(userName, Password, userType);
    res.status(201).json(created_user);
}

module.exports.login = async (req, res, next) => {
    let userName = req.body.username;
    let Password = req.body.password;
    logined_user = await userService.loginUser(userName, Password);
    res.status(201).json(logined_user);
}


module.exports.verify = async (req, res, next) => {
    try {
        let token = req.headers['authorization'].split(" ")[1];
        let decoded = jwt.verify(token, process.env.SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({ "msg": "Couldnt Authenticate" });
    }
}
    //   async(req,res,next)=>{
    //     let user = await User.findOne({where:{id : req.user.id},attributes:{exclude:["password"]}});
    //     if(user === null){
    //       res.status(404).json({'msg':"User not found"});
    //     }
    //     res.status(200).json(user);
    //  } 

