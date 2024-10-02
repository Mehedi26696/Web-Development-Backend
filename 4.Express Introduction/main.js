
const express = require('express')
const app = express()
const port = 3000
 
app.use(express.static('public'))

// app.get or app.post or app.put or app.delete(path, handler)
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('Hello about')
})


app.get('/contact', (req, res) => {
    res.send('Hello contact')
})

app.get('/blog', (req, res) => {

    res.send("hello blog")
  })

//   app.get('/blog/intro-to-js', (req, res) => {
//     //logic to fetch intro to js from the db
//     res.send('Hello intro-to-js')
//   })

//   app.get('/blog/python', (req, res) => {
//     //logic to fetch intro to python from the db
//     res.send('Hello python')
//   })

app.get('/blog/:slug', (req, res) => {
    //logic to fetch intro to js from the db
    //For url: http://localhost:3000/blog/mehedi?mode-dark&region-in
    console.log(req.params)  //output will be -> { slug: 'mehedi' }
    console.log(req.query)   // output will be -> { 'mode-dark': '', 'region-in': '' }
   // res.send(`hello ${req.params.slug} and ${req.params.second}`)

   res.send(`hello ${req.params.slug}`)
  })
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})