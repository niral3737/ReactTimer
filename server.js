var express = require('express');
const PORT = process.env.PORT || 3000;

//create app
var app = express();

app.use(function (req, res, next) {
  if(req.headers['x-forwarded-proto'] === 'https'){
    res.redirect(`http://${req.hostname}${req.url}`);
  }else{
    next();
  }
});

app.use(express.static('public'));

app.listen(PORT, function () {
  console.log(`Express app is up and running on ${PORT}`);
})
