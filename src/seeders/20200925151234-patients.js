'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Patients',
      [
        {
          fullname: 'Alberto Dos Santos',
          plan_id: 1,  // Plano ID 1
        },        
        {
          fullname: 'Maria Silveira Rodrigues',
          plan_id: 2,  // Plano ID 2
        },
        {
          fullname: 'Osvaldo de Andrade',
          plan_id: 2,  // Plano ID 2
        },
        {
          fullname: 'Cristiano Ronaldo Messi',
          plan_id: 4,  // Plano ID 4
        },
        {
          fullname: 'Luis Carlos Suarez',
          plan_id: 3,  // Plano ID 3
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Patients', null, {});
  },
};
