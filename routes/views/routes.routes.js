// вызываю функцию Router у express, он возвращает объект router
const router = require('express').Router();

const { Route } = require('../../db/models');

const VeloMarshPage = require('../../components/pages/VeloMarshPage');
// const VeloMarshCard = require('../../components/VeloMarshCard');
// const UpdateProjectPage = require('../../components/pages/UpdateProjectPage');

// router.get('/update-form/:routeId', async (req, res) => {
//   const { projectId } = req.params;

//   const project = await Project.findOne({ where: { id: projectId } });

//   const html = res.renderComponent(UpdateProjectPage, { project });
//   res.send(html);
// });

// роут на отрисовку страницы с отдельным проектом
router.get('/:routeId', async (req, res) => {
  const { routeId } = req.params;

  const route = await Route.findOne({ where: { id: routeId } });

  const html = res.renderComponent(VeloMarshPage, { route });
  res.send(html);
});

module.exports = router;
