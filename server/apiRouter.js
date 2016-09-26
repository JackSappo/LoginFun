const router = require('express').Router();
const db = require('./db.js');

// router.use((req, res, next) => {
//   console.log('Request at /login received');
//   next();
// });

router.post('/login', function(req, res) {
  console.log('server received', req.body);

  return db('testeroo')
  .insert({email: req.body.email, password: req.body.password})
  .then(function() {
    res.send('received');
  });

});

module.exports = router;
