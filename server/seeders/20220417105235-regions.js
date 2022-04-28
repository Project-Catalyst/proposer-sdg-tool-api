
'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Regions', [{"id":1,"name":"Africa"},{"id":2,"name":"Asia-Pacific"},{"id":3,"name":"Eastern Europe"},{"id":4,"name":"Latin America and the Caribbean"},{"id":5,"name":"Western Europe & Others"}])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Regions', null, {})
  }
}
