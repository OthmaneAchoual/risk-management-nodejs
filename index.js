const express = require('express');
const app = express();

const Choice = require('./models/choice');

// config
const port = process.env.PORT || 3030;

// controller, routing
app.get('/choices', (req, res) => {
  res.json([{
    category: 'risk',
    label: 'dangerous'
  }]);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});