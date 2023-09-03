const User = require("../models/user")
const jwt = require("jsonwebtoken");
const asynchandler = require("express-async-handler");

module.exports.authMiddleware = asynchandler(async(req,res,next)=>{
    let token
   if(req?.headers?.authorization?.startsWith("Bearer")){
    token = req.headers.authorization.split(" ")[1]
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        const user = await User.findById(decoded?.id)
        req.user=user
        next()
    }catch(error){
        throw new Error("Token expire , please login")
    }

   }else{
    throw new Error("there is no token attached to header")
   }
})


module.exports.isAdmin = asynchandler(async(req,res,next)=>{
    const {email} = req.user
    const adminUser = await User.findOne({email})
    if(adminUser.role !== "admin"){
        throw new Error("You are not admin")
    }
    else{
        next()
    }
})
