const router = require('express').Router();
const MainPage = require('../../components/pages/MainPage');

const { Project, User } = require('../../db/models');

router.get('/', async (req, res) => {
  const projects = await Project.findAll({
    include: User,
    raw: true,
    nest: true,
  });

  res.send(res.renderComponent(MainPage, { projects }));
});

router.get('/profile', (req, res) => {
  res.send(res.renderComponent(ProfilePage));
});

module.exports = router;
