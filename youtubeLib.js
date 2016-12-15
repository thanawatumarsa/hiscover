var Youtube = require('youtube-node')
var youTube = new Youtube()

exports.search = function (req, res, next) {
  var keyword = req.query.keyword
  youTube.setKey('AIzaSyCCxnHYmglAHJg_5hsL7fxoosaUPGed4LY')

  youTube.search(keyword, 50, function (err, result) {
    if (err) {
      console.log(err)
    } else {
      res.send(JSON.stringify(result, null, 50))
    }
  })
}
