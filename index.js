const express = require('express')
const app = express()
app.get('/', (req, res) =>
{
    res.render('index.ejs', {name: "Harry", lastname: "Potter"})
})
const PORT = process.env.PORT || 8080
app.listen(PORT, ()=>console.log(`listen port: ${PORT}`))