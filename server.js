var http = require('http');

const PORT = process.env.PORT || 8123;

http.createServer(function (req, res) {
  const message = "You are awesome dude!";
  console.log("INFO: "+message)
  res.write(message);
  res.end();
}).listen(PORT, function(err, res){
    console.log("Listeninng!!");
});
