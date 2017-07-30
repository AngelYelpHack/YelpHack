'use strict';

const yelp = require('yelp-fusion');

const path = require('path');
const serve = path.join(__dirname, '../../client/index.html');

const config = require('../../.env');

module.exports = (app) => {
  const router = app.loopback.Router();

  router.get('/login/:type', (req, res) => {
    res.send('login');
  });

  router.get('/yelp', function (req, res) {
    console.log('Term is ==========>', req.params.term)
    console.log('location is =========>', req.params.location)
    const id = config.yelpId;
    const sec = config.yelpSecret;

    const searchRequest = {
      location: "san-francisco"
      // location: req.params.location
    }

    return yelp.accessToken(id, sec)
      .then(response => {
        const client = yelp.client(response.jsonBody.access_token)
        return client.search(searchRequest)
      }).then((search) => {
        console.log(search.jsonBody.businesses[0])
        return search.jsonBody.businesses[0]
      }).then((data) => {
        res.status(200).send(data);
      }).catch(err => {
        res.status(404).send(err);
      })
  }
  )

  router.get('/:any', (req, res) => {
    res.sendFile(serve);
  });


  app.use(router);
}
