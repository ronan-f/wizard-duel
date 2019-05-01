const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const PORT = 8080;
const knex = require('./knex/knex.js');

App.use(BodyParser.urlencoded({ extended: false }));
App.use(Express.static('public'));


App.get('/api/wizards', (req, res) => {
  let response = function(characters) {
    let wizards = {wizards:characters}
    console.log("THE WIZARDS:", wizards)
    res.json({
<<<<<<< HEAD
      message:`We have a query`, wizards
      //message: query[0].name
=======
      message:`Coming back from the server with the wizards ${wizards}`,
      wizards
>>>>>>> 9224acd1c630c7e8ca476b0a0ea0e72c4f1da06c
    });
  }
  knex.select('*').from('characters')
  .then(characters => response(characters));
});

App.get('/api/spells', (req, res) => {
  let response = function(thespells) {
    let spells = {spells:thespells}
    console.log("THE SPELLS:", spells)
    res.json({
      message:`Coming back from the server with the spells ${spells}`,
      spells
    });
  }
  knex.select('*').from('spells')
  .then(thespells => response(thespells));
});

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});