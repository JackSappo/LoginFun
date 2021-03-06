const path = require('path');
const express = require('express');
// const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
// const router = express.Router();
const apiRouter = require('./server/apiRouter.js');

// router.use((req, res, next) => {
//   console.log('routing all requests');
//   next();
// });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/api', apiRouter);

app.get('/dist/bundle.js', function(req, res) {
  res.sendFile(path.join(__dirname, 'client/dist/bundle.js'));
});

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'client/index.html'));
});

app.listen(2500, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:2500');
});
