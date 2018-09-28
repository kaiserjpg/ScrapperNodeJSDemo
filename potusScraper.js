const rp = require('request-promise');
const fs = require('fs');

let exports = module.exports = {};

exports.execute = function () {
    const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';
    
    rp(url)
      .then(function(html){
        //success!
        console.log(html);
        return html;
      })
      .catch(function(err) {
        //handle error
      });
};

exports.toJSON = function (data) {
    var json = JSON.stringify(data || {});

    fs.writeFile('output.json', json, 'utf8', catchToJSON);
}; 

function catchToJSON(err) {
    if (err) throw err;
    console.log('complete');
}
