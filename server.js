const express = require('express');
const html = require('./routes/htmlRoutes')
const api = require('./routes/apiRoutes.js');

const app = express();
const PORT = process.env.PORT || 3001;



// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', api);
app.use('/',html);


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
