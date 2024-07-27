const PASSWORD = require('../Model/passwordModel')

exports.addPassword=async(req,res)=>{
    console.log('inside add passwrd')
    const{username,password,website}=req.body
    try{
        const newData= new PASSWORD({
            username,password,website
        })
      const result=  await newData.save()
        res.status(200).json(result)

    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }

}


exports.getAllPasswordData=async(req,res)=>{
    console.log('hai')
    try{
           PASSWORD.find().then((result)=>{
            res.status(200).json(result)
        })
        

    }catch(err){
        console.log(err)
        res.status(500).json(err.message)
    }

}

exports.deleteAllPasswordData=async(req,res)=>{
    console.log('deletes')
    try{
        await PASSWORD.deleteMany({})
        res.status(200).json('deletion successfull')

    }catch(err){
        res.status(500).json(err.message)
    }
}

exports.deleteOnePassword=async(req,res)=>{
    const{id}=req.params

    console.log(id)
    try{

       const result= await PASSWORD.findByIdAndDelete(id)
       console.log(result)
        res.status(200).json('deleted successfully')
    }catch(err){
        console.log(err)
    }
}

exports.editPassword=async(req,res)=>{
    console.log('indie edit')
    const{website,username,password,id}=req.body
    console.log(website,username,password,id)
    try{
      const result=  await PASSWORD.findByIdAndUpdate(id,{website,username,password},{new:true})
      res.status(200).json(result)
        
    }catch(err){
        console.log(err)
    }
}