var http = require('http');

const PORT = 8123;

http.createServer(function (req, res) {
  const message = "You are awesome dude! Stagig-push-test";
  console.log("INFO: "+message)
  res.write(PORT+ "" + message);
  res.end();
}).listen(PORT, function(err, res){
    console.log("Listeninng!!");
});
