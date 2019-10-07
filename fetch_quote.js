var request = require("request");

var options = {
  method: "GET",
  url: "https://programming-quotes-api.herokuapp.com/quotes/random"
};

setInterval(() => {
  request(options, function(error, response, body) {
    if (error) throw new Error(error);

    const result = JSON.parse(body);
    document.getElementById("quote").innerHTML = result.en;
    document.getElementById("author").innerHTML = result.author;
  });
}, 5000);
