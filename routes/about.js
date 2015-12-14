const router = require('express').Router();

router.get('/', (req, res, next) => {
  return res.json({
    about: 'This is a sample node.js webapp that demonstrates how you might go about using Docker w/ Node. Source @ https://github.com/markthethomas/dockerizing-nodejs-app'
  });
});

module.exports = router;