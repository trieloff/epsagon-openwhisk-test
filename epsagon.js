process.env.EPSAGON_DEBUG = 'true';

const epsagon = require("epsagon");
const request = require("request");

epsagon.init({
  token: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  appName: "Epsagon Testing",
  metadataOnly: false // Optional, send more trace data
});

getChuckNorrisFact = url => {
  return new Promise((resolve, reject) => {
    request.get(url, function(error, response, data) {
      if (error) reject(error);

      console.log('got a response');
      let content = JSON.parse(data);
      resolve(content);
    });
  });
};

function main(params) {
  console.log(params);
  return getChuckNorrisFact('https://api.chucknorris.io/jokes/random');
}

module.exports.main = epsagon.openWhiskWrapper(main);
