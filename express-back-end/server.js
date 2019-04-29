const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const PORT = 8080;
const knex = require('./knex/knex.js');

App.use(BodyParser.urlencoded({ extended: false }));
App.use(Express.static('public'));


App.get('/api/data', (req, res) => {
  let response = function(characters) {
    let wizards = {wizards:characters}
    console.log("THESE WIZZES YO", wizards)
    res.json({
      message:`We have a query`, wizards
    });
  }
  knex.select('*').from('characters')
  .then(characters => response(characters));
});

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});