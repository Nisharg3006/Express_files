const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"));
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/home', (req, res) => {
  res.sendFile(__dirname+'/home.html')
})
app.get('/about', (req, res) => {
  //res.send('Hello About!')
  res.sendFile(__dirname+'/about.html')
})
app.get('/contact', (req, res) => {
  res.sendFile(__dirname+'/contact.html')
})
app.get('/cake/ahmedabad', (req, res) => {
  res.send('Hello ahmedabad cake')
})
app.get('/cake/surat', (req, res) => {
  res.send('Hello surat cake')
})
app.get('*', (req, res) => {
  res.sendFile(__dirname+'/error.html')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
