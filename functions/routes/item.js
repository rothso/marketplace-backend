const router = require('express').Router();

router.post('/new', (req, res) => {
  res.json({
    status: 'API Its working',
    message: 'Welcome to Marketplace!',
  });
});

module.exports = router;
