var time = new Date();
console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());

// document.getElementById("enterJSON").addEventListener("submit", function(event){
//   event.preventDefault();
// });

// var request = require('request');
// function updateClient(postData){
//   var clientServerOptions = {
//     uri: 'http://'+clientHost+''+clientContext,
//     body: JSON.stringify(postData),
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//   }
// }
// request(clientServerOptions, function (error, response) {
//   console.log(error,response.body);
//   return;
// });
// }