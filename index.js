$(document).ready(function() {

/global $*/

  $( "#home" ).click( function() {
    window.location = "index.html";
});

 $( "#about" ).click( function(e) {
    e.preventDefault();
	$( "#figures").hide();
	$( "#des").hide();
    $( "#docs" ).load( "about.html" );
});

 $( "#exec" ).click( function(e) {
    e.preventDefault();
	$( "#figures").hide();
	$( "#des").hide();
    $( "#docs" ).load( "reports/executive.html" );
	$( "#refs" ).load( "reports/reference.html" );
});

$( "#analysis" ).click( function(e) {
    e.preventDefault();
	$( "#figures").hide();
	$( "#des").hide();
    $( "#docs" ).load( "es/map.html" );
});

$( "#alg" ).click( function(e) {
    e.preventDefault();
	$( "#figures").hide();
	$( "#des").hide();
    $( "#docs" ).load( "reports/algeria.html" );
	$( "#refs" ).load( "reports/reference.html" );
});
$( "#col" ).click( function(e) {
    e.preventDefault();
	$( "#figures").hide();
	$( "#des").hide();
    $( "#docs" ).load( "reports/colombia.html" );
	$( "#refs" ).load( "reports/reference.html" );
});
$( "#ind" ).click( function(e) {
    e.preventDefault();
	$( "#figures").hide();
	$( "#des").hide();
    $( "#docs" ).load( "reports/indonesia.html" );
	$( "#refs" ).load( "reports/reference.html" );
});
$( "#mal" ).click( function(e) {
    e.preventDefault();
	$( "#figures").hide();
	$( "#des").hide();
    $( "#docs" ).load( "reports/mali.html" );
	$( "#refs" ).load( "reports/reference.html" );
});
$( "#nig" ).click( function(e) {
    e.preventDefault();
	$( "#figures").hide();
	$( "#des").hide();
    $( "#docs" ).load( "reports/nigeria-one.html" );
	 $( "#docs1" ).load( "reports/nigeria-two.html" );
	 $( "#docs2" ).load( "reports/nigeria-three.html" );
	$( "#refs" ).load( "reports/reference.html" );
});
$( "#som" ).click( function(e) {
    e.preventDefault();
	$( "#figures").hide();
	$( "#des").hide();
    $( "#docs" ).load( "reports/somalia.html" );
	$( "#refs" ).load( "reports/reference.html" );
});
$( "#sou" ).click( function(e) {
    e.preventDefault();
	$( "#figures").hide();
	$( "#des").hide();
    $( "#docs" ).load( "reports/south-africa.html" );
	$( "#refs" ).load( "reports/reference.html" );
});
$( "#sri" ).click( function(e) {
    e.preventDefault();
	$( "#figures").hide();
	$( "#des").hide();
    $( "#docs" ).load( "reports/sri-lanka.html" );
	$( "#refs" ).load( "reports/reference.html" );
});
});

var http = require("http");
var fs = require("fs");
var path = require("path");
var mime = require("mime");

function send404(response) {
  response.writeHead(404, {"Content-type" : "text/plain"});
  response.write("Error 404: resource not found");
  response.end();
}

function sendPage(response, filePath, fileContents) {
  response.writeHead(200, {"Content-type" : mime.lookup(path.basename(filePath))});
  response.end(fileContents);
}

function serverWorking(response, absPath) {
  fs.exists(absPath, function(exists) {
    if (exists) {
      fs.readFile(absPath, function(err, data) {
        if (err) {
          send404(response)
        } else {
          sendPage(response, absPath, data);
        }
      });
    } else {
      send404(response);
    }
  });
}

var server = http.createServer(function(request, response) {
  var filePath = false;

  if (request.url == '/') {
    filePath = "index.html";
  } else {
    filePath = request.url;
  }

  var absPath = "./" + filePath;
  serverWorking(response, absPath);
});

var port_number = server.listen(process.env.PORT || 3000);