const express = require("express")
const collection = require("./src/components/mongo")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.post('',(req,res)=>{
    collection.create(req.body)
    .then(collection => res.json(collection))
    .catch(err => res.json(err))
})

app.listen(3001,()=>{
    console.log("server is running")
})