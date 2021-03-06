const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();


// return all favorite images
router.get('/', (req, res) => {
  const queryText = 'SELECT * FROM favorite';
  console.log('in get - ');
  pool.query(queryText)
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
      console.log('Error completing SELECT plant query', err);
      res.sendStatus(500);
    });
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
router.delete('/:id', (req, res) => {
  
  const queryText = 'DELETE FROM favorite WHERE id=$1';
  pool.query(queryText, [req.params.id])
    .then(() => { res.sendStatus(200); })
    .catch((err) => {
      console.log('Error completing SELECT plant query5', err);
      res.sendStatus(500);
    });

});

module.exports = router;
