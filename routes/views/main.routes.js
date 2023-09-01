const router = require('express').Router();
const MainPage = require('../../components/pages/MainPage');
const ProfilePage = require('../../components/pages/ProfilePage');

const { Route, User } = require('../../db/models');

const routes = [
  {
    name: 'testName',
    length: 1,
    location: 'spb',
    description: 'super',
    // User: {
    //   id: 1,
    //   name; 'IGOR'
    // }
  },
  {
    name: 'testName2',
    length: 1,
    location: 'spb',
    description: 'superpuper',
  },
];

router.get('/', async (req, res) => {
  const routes = await Route.findAll({
    include: User,
    raw: true,
    nest: true,
  });
  console.log(routes);
  res.send(res.renderComponent(MainPage, { routes }));
});

router.get('/profile', (req, res) => {
  res.send(res.renderComponent(ProfilePage));
});

module.exports = router;
