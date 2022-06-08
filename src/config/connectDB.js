const { Sequelize } = require('sequelize');




// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('hoidanit', 'root', null, {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});
let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('connect ok');
    }
    catch (e) {
        console.error('cc', error);
    }
}
module.exports = connectDB;