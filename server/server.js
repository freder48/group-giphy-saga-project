const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { default: axios } = require('axios');
require('dotenv').config();

// Route includes
const favoriteRouter = require('./routes/favorite.router');
const categoryRouter = require('./routes/category.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('build'));

/* Routes */
app.use('/api/favorite', favoriteRouter);
app.use('/api/category', categoryRouter);

//get all images from search
app.get('/api/search', (req,res) => {
  let giphyKey = process.env.GIPHY_API_KEY;
  console.log('Got key?', giphyKey);
  axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${giphyKey}`)
.then(response => {
  res.send(response.data.data)
}).catch(error => {
  console.log('Error searching GET from giphy');
  res.sendStatus(500);
  })
})


// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
