'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return Promise.all([

      queryInterface.bulkInsert('roles', [
        {role: "admin", createdAt: new Date(), updatedAt: new Date()},
        {role: "user", createdAt: new Date(), updatedAt: new Date()}
      ], {}),

      queryInterface.bulkInsert('user_role', [
        // DEJAR user_id todos en 1 , los puse en 3 porque en mi db esta asi
        {user_id: 1 , role_id: 1, createdAt: new Date(), updatedAt: new Date()},
        {user_id: 1 , role_id: 2, createdAt: new Date(), updatedAt: new Date()},
        {user_id: 2 , role_id: 2, createdAt: new Date(), updatedAt: new Date()}
      ], {}),

    ]);
 
  },

  down: async (queryInterface, Sequelize) => {

    return Promise.all([
      queryInterface.bulkDelete('roles', null, {}),
      queryInterface.bulkDelete('user_role', null, {})
    ]);
  }
};
