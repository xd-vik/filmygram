const bcrypt = require("bcrypt");
const UserModel = require('../models/user');
const jwt = require('jsonwebtoken');
require('dotenv').config();
exports.login = async (req,res) =>{
    console.log(req.body);
    try {
        const {userid,password}=req.body;

        if(!userid || !password){
            return res.status(400).json({
                success:false,
                message:"Please insert all details"
            });
        }

        let user = await UserModel.findOne({userid});

        if(!user){
            return res.status(403).json({
                sucess:false,
                message:"Something went wrong"
            })
        }
        const payload ={
            UserId:user.userid,
            id:user._id,
            role:"Admin"
        }
        bcrypt.compare(password, user.password, function (err, result) {
            if (err) {
                console.error('Bcrypt error:', err);
                return res.status(500).json({ 
                    success:false,
                    message: 'Internal server error' 
                });
            }
            if (!result) {
                return res.status(403).json({
                    success:false, 
                    message: 'Invalid user ID or password' 
                });
            }
            // token
            let token = jwt.sign(payload,
                process.env.JWT_Secret,
                {
                    expiresIn:"5h",
                }
            );
            user =user.toObject();
            user.token = token;
            user.password=undefined;

            const options = {
                expires: new Date(Date.now() + 24 *60 *60 *1000),
                httpOnly:true
            }

            res.cookie("token",token,options).status(200).json({
                success:true,
                token, 
                user,
                message:"Login Successfully"
            });
            // return res.status(200).json({ 
            //     success:true,
            //     message: 'Login successful' 
            // });
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Login failure"
        })
        
    }
}