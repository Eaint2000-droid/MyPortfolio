// Basic Setup
var http     = require('http'),
express  = require('express'),
parser   = require('body-parser');

// Setup express
var app = express();
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.set('port', process.env.PORT || 5000);

app.use(express.static('assets'));
app.route('/');
app.use(express.static("./navigation"));

// Create server
http.createServer(app).listen(app.get('port'), function(){
  console.log('Server listening on port ' + app.get('port'));
  });

// Set default route
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});