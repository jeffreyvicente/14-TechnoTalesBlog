const {Model, DataTypes} = require('sequelize');

const bcrypt = require('bcrypt');

const sequelize = require('../config/connection');

class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPW, this.checkPassword);
    }
}

User.init();

module.exports = User;