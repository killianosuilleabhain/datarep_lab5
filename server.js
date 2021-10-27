const express = require('express')
const app = express()
const port = 4000
const bodyParser = require('body-parser')


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//Once the listen method listens this activates
app.get('/', (req, res) => {
  res.send('Welcome to Data Representation and Querying!')
})

// Changes the page to "Hi" when the url is '/whatever'
app.get('/whatever', (req, res) => {
    res.send('Hi');
})

//Returns an arguement of a specified paramter
app.get('/hello/:name', (req, res) =>{
    res.send('Hello ' + req.params.name);
})

//Gets the api prints out .json 
app.get('/api/movies', (req, res)=>{
    const movies = [
            {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
            },
            {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
            }
            ];
        

            res.status(200).json({
                mymovies:movies,
                'message': 'Data Sent'
            })
            
    
})

//returning HTML page
app.get('/index', (req, res) =>{
    res.sendFile(__dirname +'/index.html');
})


app.get('/name', (req, res) =>{
    res.send('Hello ' + req.query.firstname + ' ' + req.query.lastname);       //Res.send sends out text
})

app.post('/name', (req,res)=>{
    res.send('Slán ' + req.body.firstname + ' ' + req.body.lastname);
})


//Setting up server before getting the get method
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})