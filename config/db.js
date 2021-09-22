const { Sequelize, DataTypes } = require('sequelize');
require("dotenv").config()
const username=process.env.username
const password=process.env.password
const sequelize = new Sequelize(`postgres://${username}:${password}@localhost:5432/users_data`);
const sqlconnection = async() => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        sequelize.close();
        console.error('Unable to connect to the database:', error);
    }
};


module.exports = {sqlconnection};

