// address is 
//URL -> http://localhost:8383
// IP -> 127.0.0.1:8383

const express = require('express')
const app = express()

const PORT = 8383

let data = ['shayaan']

//Middleware 

app.use(express.json())

// HTTP Verbs && Routes


// Type1 - WEBSITE endpoints (for sending HTML) - visual

app.get('/', (req, res)=>{
    res.send(`
        <body style="background:pink; 
        color:blue;">
            <h1>DATA:</h1>
            <p>
            ${JSON.stringify(data)}
            </p>
            <a href="/dashboard">Dashboard</a>
        </body>
    
    `)
})

app.get('/dashboard', (req, res)=>{
    res.send(`
    <body>
    <h1>dashboard</h1>
    <a href="/">Home Page</a>
    </body>`)

})

// API endpoints (for sending JSON) - non-visual


//crud action - method - CRUD - create-post - read-get - update-put - delete-delete
app.get('/api/data', (req, res) => {
    res.send(data)
})

//Create a new user
app.post('/api/data', (req, res) => {
    const newEntry = req.body
    data.push(newEntry.name)
    res.sendStatus(201)
    console.log('user ' + newEntry.name + ' has been added successfully')
})

//Delete the last user
app.delete('/api/data', (req, res) => {
    data.pop()
    res.sendStatus(203)
    console.log("last user has been deleted successfully")
})

app.listen(PORT, ()=> console.log(`Server has started on: ${PORT}`))