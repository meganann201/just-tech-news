// import the Sequelize constructor from the library
const Sequelize = require('sequelize');

let sequelize;

sequelize = new Sequelize(process.env.JAWSDB_URL);
  
module.exports = sequelize;