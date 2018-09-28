const rp = require('request-promise');
const $ = require('cheerio');
const fs = require('fs');

exports.execute = function () {
    const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';
    
    return rp(url)
      .then(function(html){
        //success!
        const dom = $.load(html);
        const wikiUrls = [];
        for (let i = 0; i < dom('big > a').length; i++) {
            wikiUrls.push(dom('big > a')[i].attribs.href);
        }
        console.log(wikiUrls);
        resolve(wikiUrls);
      })
      .catch(function(err) {
        //handle error
      });
};

exports.toJSON = function (data) {
    var json = JSON.stringify(data);

    fs.writeFile('output.json', json, 'utf8', catchToJSON);
}; 

function catchToJSON(err) {
    if (err) throw err;
    console.log('complete');
}
