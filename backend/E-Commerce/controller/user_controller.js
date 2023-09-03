const { generateToken } = require("../config/jwtToken");
const User = require("../models/user");
const asyncHandler = require("express-async-handler")
const validateMongoDbId = require("../utils/validateMongoDbId");

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



module.exports.loginUser=asyncHandler(async(req,res)=>{
    const {email, password} =req.body
    // console.log(email,password);
    const findUser = await User.findOne({email})

    if (findUser && await findUser.isPasswordMatched(password)){
        res.json({
            _id : findUser?._id,
            firstname:findUser?.firstname,
            lastname:findUser?.lastname,
            email:findUser?.email,
            mobile:findUser?.mobile,
            token:generateToken(findUser?._id)
        })
    }else{
        throw new Error("Invalid credentials")
    }
})

// get all user

module.exports.getAll =  asyncHandler(async(req,res)=>{
    const {email} = req.body
   
    try{
        const users = await User.find()
        res.json(users)
     }catch(error){
        throw new Error("Can't get all user ")
     }
})

//get a user by id

module.exports.getaUser = asyncHandler(async(req,res)=>{
     const {id}=req.params
     validateMongoDbId(id)
     
     try{
        const user = await User.findById(id)
     res.json(user)
     }catch(error){
        throw new Error("Can't get a user ")
     }
})


//delete a user by id 

module.exports.deleteUser = asyncHandler(async(req,res)=>{
    const {id}=req.params
    validateMongoDbId(id)
    
    try{
       const deleteaUser = await User.findByIdAndDelete(id)
    res.json({deleteaUser})
    }catch(error){
       throw new Error("Can't delete a user ")
       
    }
})

 