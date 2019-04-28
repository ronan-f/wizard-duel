const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const PORT = 8080;
const knex = require('./knex/knex.js');

App.use(BodyParser.urlencoded({ extended: false }));
App.use(Express.static('public'));


App.get('/api/data', (req, res) => {
  let response = function(query) {
    let voldy = [query[0].name]
    let draco = [query[1].name]
    res.json({
      message:`And then there was ${voldy} and ${draco}`
    });
  }
  knex.select('*').from('characters')
  .then(data => response(data));
});

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
