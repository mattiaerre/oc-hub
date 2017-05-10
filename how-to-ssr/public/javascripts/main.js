/* eslint-disable no-console */

requirejs.config({
  paths: {
    jquery: 'https://code.jquery.com/jquery-3.2.1.min',
    'chegg-oc-client': 'http://components-test-cdn.cheggnet.com/components/oc-client/0.36.27/src/oc-client.min'
  }
});

requirejs(['jquery', 'oc-client.min'], ($, ocClient) => {
  console.log('ocClient:', ocClient);
  console.log('ocClient.renderedComponents:', ocClient.renderedComponents);
  console.log('ocClient.cmd:', ocClient.cmd);
  console.log('ocClient.require:', ocClient.require);
});
