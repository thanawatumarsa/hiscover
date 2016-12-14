var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var youtube = require('./youtubeLib.js')
app.use(express.static('dist'))

app.get('/search', youtube.search)

app.set('port', (process.env.PORT || 3000))
app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'))
})
