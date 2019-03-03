const router = require('express').Router();

module.exports = (db) => {
  // Create a new listing
  router.post('/new', (req, res) => {
    db.collection('items').add(req.body)
      .then(docRef => res.status(200).send(docRef.id))
      .catch(err => res.status(500).send(err));
  });

  // Get all listings
  router.get('/', (_req, res) => {
    db.collection('items').get()
      .then(snapshot => (snapshot.size > 0
        ? res.status(200).json(snapshot.docs.map(it => it.data()))
        : res.status(404).send('No listings found!')))
      .catch(err => res.status(500).send(err));
  });

  // Get a specific listing
  // router.get('/:id', (req, res) => {
  // });

  return router;
};
