'use strict';

const path = require('path');
const serve = path.join(__dirname, '../../client/index.html')

module.exports = (app) => {
  const router = app.loopback.Router();
  router.get('/:any', (req, res) => {
    res.sendFile(serve);
  });

  router.get('/login/:type', (req, res) => {
    res.send('login');
  });


  app.use(router);
}
