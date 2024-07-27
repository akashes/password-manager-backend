const mongoose =require('mongoose')

mongoose.connect(process.env.DATABASE).then(()=>{
    console.log('mongodb connection successfull')
}).catch((err)=>{
    console.log('mongodb connection error')
    console.log(err)
}) 