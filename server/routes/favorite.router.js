const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  res.sendStatus(200);
});

// add a new favorite 
router.post('/', (req, res) => {
  const favorite = req.body;
  const queryText = `INSERT INTO "favorite" ("giphy_id", "title", "url", "category_id")
                     VALUES ($1, $2, $3, $4);`;

  pool.query(queryText, [favorite.giphy_id, favorite.title, favorite.url, favorite.category_id])
    .then(() => { res.sendStatus(201); })
    .catch((err) => {
      console.log('Error completing POST server query', err);
      res.sendStatus(500);
    });

});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
