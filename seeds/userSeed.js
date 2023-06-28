const { User } = require('../models');

const userData = [
    {
        username: 'Mark',
        email: 'mark@hotmail.com',
        password: 'pass1234'
    },
    {
        username: 'Alain',
        email: 'alain@gmail.com',
        password: 'pass1234'
    },
    {
        username: 'Diana',
        email: 'diana@yahoo.com',
        password: 'pass1234'
    },
    {
        username: 'Richard',
        email: 'richard@yahoo.com',
        password: 'pass1234'
    },
    {
        username: 'Rachel',
        email: 'rachel@aol.com',
        password: 'pass1234'
    },
    {
        username: 'Jimmy',
        email: 'jimmy@yahoo.com',
        password: 'pass1234'
    },
    {
        username: 'Amanda',
        email: 'amanda@hotmail.com',
        password: 'pass1234'
    },
    {
        username: 'Robert',
        email: 'robert@gmail.com',
        password: 'pass1234'
    }

];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
  