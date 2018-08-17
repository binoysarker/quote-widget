// console.log('render process is started');
const request = require('request');

setInterval(function () {
  request('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',(error,response,body) => {
    let bodyJson = JSON.parse(body);
    let randomTitle = bodyJson[0]['title'];
    let randomQuote = bodyJson[0]['content'];
    let QuoteElement = document.getElementById('quote');
    let QuoteTitle = document.getElementById('title');
    QuoteTitle.innerHTML = randomTitle;
    QuoteElement.innerHTML = randomQuote;
  });
}, 3000);
