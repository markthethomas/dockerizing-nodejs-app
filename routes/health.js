const router = require('express').Router();

router.get('/', (req, res, next) => {
  return res.json({
    healthy: true
  });
});

module.exports = router;
