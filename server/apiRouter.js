var router = require('express').Router();

// router.use((req, res, next) => {
//   console.log('Request at /login received');
//   next();
// });

router.post('/login', function(req, res) {
  console.log('received');
  res.send('received');
});

module.exports = router;
