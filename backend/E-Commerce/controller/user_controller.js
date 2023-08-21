const User = require("../models/user");
const asyncHandler = require("express-async-handler")



module.exports.createUser =asyncHandler( async(req,res)=>{
    const email = req.body.email
    const findUser = await User.findOne({email : email})
    if(!findUser){
        const newUser = await User.create(req.body)
        res.json(newUser)
    }else{
        // res.json({
        //     msg:"Already User exist"
        // })
        throw new Error ("User already exist")
    }
})


