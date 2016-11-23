var express = require('express');
var morgan = require('morgan');

app = express();
app.use(morgan('dev'));


app.listen(3000, function() {
  console.log('Listening on port 3000...')
})
