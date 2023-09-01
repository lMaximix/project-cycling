'use strict';
const { Route, User } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await User.bulkCreate(
      [
        {
          login: 'Lesha',
          password: '123',
          mail: 'a@m',
          Routes: [
            {
              name: 'Маршрут1',
              length: 20,
              location: 'Спб',
              description: 'офигенное описание маршрута',
            },
            {
              name: 'Маршрут2',
              length: 25,
              location: 'Спб',
              description: 'офигенное описание маршрута',
            },
            {
              name: 'Маршрут3',
              length: 30,
              location: 'Спб',
              description: 'офигенное описание маршрута',
            },
          ],
        },
        {
          login: 'Igor',
          password: '123',
          mail: 'igor@m',
          Routes: [
            {
              name: 'Маршрут4',
              length: 15,
              location: 'Спб',
              description: 'офигенное описание маршрута',
            },
            {
              name: 'Маршрут5',
              length: 18,
              location: 'Спб',
              description: 'офигенное описание маршрута',
            },
            {
              name: 'Маршрут6',
              length: 7,
              location: 'Спб',
              description: 'офигенное описание маршрута',
            },
          ],
        },
      ],

      {
        include: [Route],
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await User.destroy({
      truncate: {
        cascade: true,
      },
    });
  },
};
