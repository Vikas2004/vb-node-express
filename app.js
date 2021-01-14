// Module Dependencies

const express = require('express')

// create express app

const app = express()

// log port 

const port = process.env.PORT || 3000
app.listen(port)
console.log(`App is running on ${port}`)


app.get("/",(req,res)=>{
    res.send("Hello World from Vikas's app!!")
})

app.get('/about',(req,res)=>{
    res.send("This is a basic node express application which will also be deployed using the Heroku.")
})

app.get('/contact',(req,res)=>{
    res.send("You have raeched the contact page of Vikas. Please reach out to me at S538336@nwmissouri.edu")
})

app.get('/help',(req,res)=>{
    res.send("You have requested the help page! ")
})

app.get('/help/:topic',(req,res)=>{
    res.send("login page! ")
})