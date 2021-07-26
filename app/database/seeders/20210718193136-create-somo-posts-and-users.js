'use strict';

const { User } = require('../../models/index');
const bcrypt = require('bcrypt');
const authConfig = require('../../../config/auth');

module.exports = {
  up: async (queryInterface, Sequelize) => {
 
    return Promise.all([
      
      User.create({
        name: "Anton",
        email: "azr@azr.es",                        // Se puede parsear agregando el + o usando la funcion Number.parseInt();
        password: bcrypt.hashSync("123456", +authConfig.rounds),
        posts: [ 
          {
            title: "Tilte 1",
            body: "Body 1"
          },
          {
            title: "Tilte 2",
            body: "Body 2"
          }
        ]
      },{
        include: "posts"
      }),

      User.create({
        name: "Lucia",
        email: "lucia@gmail.com",                  // Se puede parsear agregando el + o usando la funcion Number.parseInt();
        password: bcrypt.hashSync("123456", +authConfig.rounds),
        posts: [
          {
            title: "Tilte 3",
            body: "Body 3"
          },
          {
            title: "Tilte 4",
            body: "Body 4"
          }
        ]
      },{
        include: "posts"
      })
      
    ]);

  },

  down: async (queryInterface, Sequelize) => {
    
    return Promise.all([
      queryInterface.bulkDelete('posts',null,{}),
      queryInterface.bulkDelete('users',null,{})
    ]);

  }
};
