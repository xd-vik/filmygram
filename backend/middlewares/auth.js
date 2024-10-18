

const jwt = require('jsonwebtoken');
require("dotenv").config();

exports.auth = (req,res,next)=>{
    try {
        // extract JWT token(token jaha insert hai waha se fetch karo)
        const token = req.body.token;

        if(!token){
            return res.status(401).json({
                success:false,
                message:"No token found"
            })

        }

        // verify token
        try {
            const payload = jwt.verify(token,process.env.JWT_Secret);
            console.log(payload);
            req.user =payload;
            
        } catch (error) {
            console.log(error);
            res.status(401).json({
                success:false,
                message:"Invalid Token"
            })
            
        }
        // next pe jao ager next middle ware check karna hai
        next();

        
    } catch (error) {
        console.log(error);
        res.status(401).json({
            sucess:false,
            message:"Not Authorized"
        })
        
        
    }

}

// second middleware
exports.isAdmin = (req,res,next)=>{
    try {

        if(req.user.role !== "Admin"){
            return res.status(401).json({
                success:false,
                message:"Protected admin route"
            })
        }

    } catch (error) {

        console.log(error);
        res.status(401).json({
            sucess:false,
            message:"Not Authorized"
        })
        
    }
}