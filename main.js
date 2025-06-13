import express from 'express'
import { users } from './database/table.js'
const app = express()

app.use(express.json())

app.get('/', (req,res) => {
    res.json("Welcome")
})

app.get('/database', (req,res) => {
    res.send(users)
})


app.post('/admin', (req,res) => {
    let checkAdmin = req.body
    const userData = users.find(data => data.username === checkAdmin.username && data.password === checkAdmin.password)
    console.log(userData)

    if(!userData){return res.send("no found")}

    if(userData){
        console.log("[  *  ] Admin logged in")
    }


})


app.listen(8000, () => console.log("[*] Streaming on port 8000"))
