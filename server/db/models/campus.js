const Sequelize = require('sequelize');

const db = require('../db');

const Campus = db.define('campus', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    imageUrl: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: './images/image-not-found.png',
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false,
    }

})

module.exports = Campus;