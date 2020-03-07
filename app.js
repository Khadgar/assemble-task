const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'assemble-app/build')));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'assemble-app/build', 'index.html'));
});

app.listen(process.env.PORT || 8080);
