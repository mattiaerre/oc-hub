requirejs.config({
  paths: {
    jquery: 'https://code.jquery.com/jquery-3.2.1.min'
  }
});

requirejs(['jquery', 'oc-client.min'], ($, ocClient) => {
  console.log('ocClient:', ocClient); // eslint-disable-line no-console
});
