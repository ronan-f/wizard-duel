
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('spells').del()
    .then(function () {
      // Inserts seed entries
      return knex('spells').insert([
        {id: 1, name: 'Confrigo', description:'Deals 2 damage to your opponent.', cost: 0, limit: 100, power: 2, turns: 1, affect_opponent: false, unlock_level: 1, light: true, dark: true},

        {id: 2, name: 'Bombarda', description:'Deals 4 damage to your opponent.', cost: 6, limit: 3, power: 4, turns: 1, affect_opponent: false, unlock_level: 2, light: true, dark: true},

        {id: 3, name: 'Sectumsempra', description:'Deals 8 damage to your opponent.', cost: 10, limit: 1, power: 8, turns: 1, affect_opponent: false, unlock_level: 5, light: false , dark: true},

        {id: 4, name: 'Protego', description:'Boosts your defence by 2.', cost: 3, limit: 2, power: 2, turns: 1, affect_opponent: false, unlock_level: 1, light: true, dark: true},

        {id: 5, name: 'Apparate', description:'Change your position on the board.', cost: 5, limit: 2, power: 0, turns: 1, affect_opponent: false, unlock_level: 6, light: true, dark: true},

        {id: 6, name: 'Alohomora', description:'Unlocks doors, questionable for use in battle.', cost: 0, limit: 100, power: 0, turns: 1, affect_opponent: false, unlock_level: 2, light: true, dark: true},

        {id: 7, name: 'Aqua Eructo', description:'Torrent of water shoots at opponent, causing 5 damage.', cost: 3, limit: 4, power: 5, turns: 1, affect_opponent: false, unlock_level: 2, light: true, dark: true},

        {id: 8, name: 'Avada Kedavra', description:'Causes instantaneous death when it lands. Damage 30', cost: 30, limit: 1, power: 30, turns: 1, affect_opponent: false, unlock_level: 2, light: true, dark: true},
      ]);
    });
};
