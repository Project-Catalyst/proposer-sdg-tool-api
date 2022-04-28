
'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('SdgGoals', [{"id":1,"title":"End poverty in all its forms everywhere","image":"01.jpg"},{"id":2,"title":"End hunger, achieve food security and improved nutrition and promote sustainable agriculture","image":"02.jpg"},{"id":3,"title":"Ensure healthy lives and promote well-being for all at all ages","image":"03.jpg"},{"id":4,"title":"Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all","image":"04.jpg"},{"id":5,"title":"Achieve gender equality and empower all women and girls","image":"05.jpg"},{"id":6,"title":"Ensure availability and sustainable management of water and sanitation for all","image":"06.jpg"},{"id":7,"title":"Ensure access to affordable, reliable, sustainable and modern energy for all","image":"07.jpg"},{"id":8,"title":"Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all","image":"08.jpg"},{"id":9,"title":"Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation","image":"09.jpg"},{"id":10,"title":"Reduce inequality within and among countries","image":"10.jpg"},{"id":11,"title":"Make cities and human settlements inclusive, safe, resilient and sustainable","image":"11.jpg"},{"id":12,"title":"Ensure sustainable consumption and production patterns","image":"12.jpg"},{"id":13,"title":"Take urgent action to combat climate change and its impacts","image":"13.jpg"},{"id":14,"title":"Conserve and sustainably use the oceans, seas and marine resources for sustainable development","image":"14.jpg"},{"id":15,"title":"Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss","image":"15.jpg"},{"id":16,"title":"Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels","image":"16.jpg"},{"id":17,"title":"Strengthen the means of implementation and revitalize the Global Partnership for Sustainable Development","image":"17.jpg"}])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('SdgGoals', null, {})
  }
}
