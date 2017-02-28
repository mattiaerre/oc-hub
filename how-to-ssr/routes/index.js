const express = require('express');
const { name, version } = require('../package.json');

const router = express.Router();

router.get('/', (req, res) => {
  const model = {
    title: `${name} v${version}`
  };
  res.render('index', model);
});

module.exports = router;
