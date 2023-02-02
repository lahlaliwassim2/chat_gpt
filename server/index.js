import express from "express"
import cors from 'cors'
import bodyParser from "body-parser"
import env from "dotenv"
import {Configuration, Configuration , OpenAIApi} from "openai"

const app = express()
env.config()

app.use(cors())
app.use(bodyParser.json())

const configuration = new Configuration({
    organization : "org-6KrHi3KAC6B9t5q7q5v8eRcb",
    apiKey : process.env.API_KEY
})

app.listen("3080", ()=>{
    console.log("port 3080")
})

app.get("/",  (req,res)=>{
    res.send("Hello world")
})

app.post