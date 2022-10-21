'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('teams', { 
      id: {
        type: Sequelize.INTEGER, 
        allowNull: false, 
        primaryKey: true, 
        autoIncrement: true,
      },
      team_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    }, {
      timestamps: false,
    });

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('teams');
  }
};
