var execFile = require('child_process').execFile;

/******************************************************************************/
//  CONFIGURATION 
//   The root of sample data
var collectDataRoot = __dirname + "/sampledata";
//TODO: add other config here 

/******************************************************************************/

var getStuff = exports.getStuff = function(req, res, next) {
   var cmd = "ls";
   var args = ["-l"];
   var child = execFile(cmd, args, function(err, stdout, stderr) {
          if (err) {
            console.log("Error:  ", err);
            console.log("stderr: ", stderr);
            next(err);
         }
         res.json(formatOutput(stdout)); 
      });
}


var formatOutput = function (data) {
   //TODO: process any data here....
   return data;
};

// Quick & dirty testing
// Comment in and out
var resmock = { json: function (data) {
   console.log(JSON.stringify(data, null, 2));
}};
var nextmock = function(err) { console.log(err); }
var reqmock = { params: { id:"123"}, query:{p1: 1, p2: "param-1"} };
getStuff(reqmock,resmock, nextmock);



