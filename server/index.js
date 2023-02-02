import express from "express"
import cors from 'cors'
import bodyParser from "body-parser"
import env from "dotenv"
import {Configuration , OpenAIApi} from "openai"

const app = express()
env.config()

app.use(cors())
app.use(bodyParser.json())
//Configuration d OpenAi
const configuration = new Configuration({
    organization : "org-6KrHi3KAC6B9t5q7q5v8eRcb",
    apiKey : process.env.API_KEY
})

const openai = new OpenAIApi(configuration)

app.listen("3080", ()=>{
    console.log("port 3080")
})

app.get("/",  (req,res)=>{
    res.send("Hello world")
})

app.post('/', async(req,res)=>{
    const {message} =req.body
    try {
        const response = await openai.createCompletion({
            model: "text-devinci-003",
            prompt : `${message}`,
            max_tokens: 100,
            temperature: .5
        })
    } catch (error) {
        console.log(error)
        res.send(error).status(400)
    }
})