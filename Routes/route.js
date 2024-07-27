const express = require('express')
const passwordController = require('../Controllers/passwordController')
const route=new express.Router()
console.log('inside route file')
route.get('/',(req,res)=>{
    res.send('haha its working')
})
route.post('/add-password',passwordController.addPassword)
route.get('/get-all-password',passwordController.getAllPasswordData)
route.delete('/delete-all-password',passwordController.deleteAllPasswordData)
route.delete('/delete-one-password/:id',passwordController.deleteOnePassword)
route.put('/edit-password',passwordController.editPassword)
module.exports =route