
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('characters').del()
    .then(function () {
      // Inserts seed entries
      return knex('characters').insert([
        {id: 1, name: 'Voldemort', army:'Death Eater', unlock_level: 10, rarity: 10, image: 'voldemort image to come', mana: 90},
        {id: 2, name: 'Draco Malfoy', army:'Death Eater', unlock_level: 1, rarity: 1, image: 'draco image to come', mana: 90},
        {id: 3, name: 'Bellatrix Lestrange', army:'Death Eater', unlock_level: 8, rarity: 7, image: 'bellatrix image to come', mana: 90},
        {id: 4, name: 'Dolores Umbridge', army:'Death Eater', unlock_level: 2, rarity: 3, image: 'Dolores image to come', mana: 90},
        {id: 5, name: 'Fenrir Greyback', army:'Death Eater', unlock_level: 3, rarity: 2, image: 'fenrir image to come', mana: 90},

        {id: 6, name: 'Harry Potter', army:'Dumbledore\'s Army', unlock_level: 1, rarity: 1, image: 'Harry image to come', mana: 90},
        {id: 7, name: 'Luna Lovegood', army:'Dumbledore\'s Army', unlock_level: 4, rarity: 4, image: 'Luna image to come', mana: 90},
        {id: 8, name: 'Ron Weasley', army:'Dumbledore\'s Army', unlock_level: 2, rarity: 2, image: 'ron image to come', mana: 90},
        {id: 9, name: 'Hermione Granger', army:'Dumbledore\'s Army', unlock_level: 3, rarity: 2, image: 'Hermione image to come', mana: 90},
        {id: 10, name: 'Rubeus Hagrid', army:'Dumbledore\'s Army', unlock_level: 7, rarity: 5, image: 'Rubeus image to come', mana: 90}
      ]);
    });
};
