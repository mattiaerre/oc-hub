const fetch = require('node-fetch');
const makeModel = require('./make-model');

export const data = (context, callback) => {
  const apiKey = context.params.apiKey;
  const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

  fetch(url)
    .then((response) => {
      if (response.status !== 200) {
        throw new Error(`url: ${response.url} status: ${response.status} statusText: ${response.statusText}`);
      }
      return response.json();
    })
    .then((json) => {
      callback(null, makeModel(json));
    })
    .catch((error) => {
      callback(null, error);
    });
};
