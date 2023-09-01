const router = require('express').Router();
const MainPage = require('../../components/pages/MainPage');
const ProfilePage = require('../../components/pages/ProfilePage');

const { Route, User } = require('../../db/models');

router.get('/', async (req, res) => {
  const routes = await Route.findAll({
    include: User,
    raw: true,
    nest: true,
  });
  res.send(res.renderComponent(MainPage, { routes }));
});

router.get('/profile', async (req, res) => {
  const routes = await Route.findAll({
    where: { author_id: req.session.userId },
    include: User,
    raw: true,
    nest: true,
  });
  // console.log(routes);
  res.send(res.renderComponent(ProfilePage, { routes }));
});

module.exports = router;
