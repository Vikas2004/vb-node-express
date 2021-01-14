const express = require('express')
const app = express()

const port = process.env.PORT || 3000
app.listen(port)
console.log(`Running on ${port}`)

app.get("/",(req,res)=>{
    res.send("Hello World from Vikas's app!!")
})