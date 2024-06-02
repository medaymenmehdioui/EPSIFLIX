const express = require("express")
const cors = require("cors")
const { MongoClient } = require("mongodb")

const app = express()
app.use(express.json())
app.use(cors())


const client = new MongoClient("mongodb+srv://EPSIFLIX:EPSIFLIX@epsiflix.wzfbaqu.mongodb.net/EPSIFLIX?retryWrites=true&w=majority&appName=EPSIFLIX")
client.connect().then( () => console.log('Database connected') ).catch((err) => console.log(err))


app.post('/signup',async (req, res) => {
    try {

        await client.db("EPSIFLIX").collection("users").insertOne(req.body)
        res.status(201).end()      
        
    } catch (error) {

        res.status(500).end()
    }

  })


app.post('/login', async (req, res) => {
    try {
        
        const c = await client.db("EPSIFLIX").collection("users").findOne(req.body)
        
        if (!c)
        res.status(409).end()   // erreur authentification 
        
        else
        res.status(200).json({name:c.name}).end() // user created  et  recuperer user name

        
    } catch (error) {

        res.status(500).end()
    }

  })


  app.listen(7000, () => {
    console.log('connected')

  })