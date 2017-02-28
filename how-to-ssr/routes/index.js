const debug = require('debug')('how-to-ssr:routes/index');
const express = require('express');
const Client = require('oc-client');
const { name, version } = require('../package.json');

const client = new Client({ registries: { serverRendering: 'http://localhost:3030/' } });

const router = express.Router();

router.get('/', (req, res) => {
  const components = [
    { name: 'oc-timeago', version: '1.X.X', parameters: { start: '2016-02-22' } },
    { name: 'oc-feedback-form', version: '1.X.X' },
    { name: 'oc-with-react', version: '1.X.X' }
  ];

  client.renderComponents(
    components,
    {
      container: false,
      headers: {
        'Accept-Language': 'en-US'
      },
      timeout: 3.0
    }, (errors, htmls) => {
      if (errors) {
        debug('errors:', errors);
      }
      debug('htmls:', htmls);
      const model = {
        title: `${name} v${version}`,
        timeago: htmls[0],
        feedback: htmls[1],
        react: htmls[2]
      };
      res.render('index', model);
    });
});

module.exports = router;
