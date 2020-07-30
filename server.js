var http = require('http');

const PORT = process.env.PORT || 8080;

//create a server object:
http.createServer(function (req, res) {
  console.log("INFO: You are awesome!!!")
  res.write('Everyone is awesomeeee with CI/CD!!!'); //write a response to the client
  res.end(); //end the response
}).listen(PORT, function(err, res){
    console.log("Listeninng!!");
}); //the server object listens on port 8080
