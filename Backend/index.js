const express = require('express')
const rootRouter = require('./routes/index')
const cors = require('cors')
const app =express();
const {connectDb} = require('./db')


app.use(cors())
app.use(express.json())



app.get('/statuscheck',(req,res)=>[
    res.status(200).json({message:'sab changa c'})
])

app.listen(3000,()=>{
    console.log('listening on 3000')
})