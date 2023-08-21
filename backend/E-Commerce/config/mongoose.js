const mongoose = require('mongoose');

mongoose.connect("mongodb://0.0.0.0/E-Commerce")
.then(()=>{
    console.log("Connect to the database successfully");
})
.catch(()=>{
    console.log("failed to Connect the database ");

})

const db = mongoose.connection;

module.exports=db


// const mongoose=require('mongoose')
// mongoose.connect('mongodb://0.0.0.0/E-Commerce')
// .then(()=>{
//     console.log('connect sucessfully ')
// })
// .catch(()=>{
//     console.log('can not connect to mangodb  ')
 
// })

// const db=mongoose.connection;

// module.exports=db;