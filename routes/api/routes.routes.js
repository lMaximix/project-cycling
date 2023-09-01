const router = require('express').Router();
const VeloMarshCard = require('../../components/VeloMarshCard');
const { Route, User } = require('../../db/models');
const ProfilePage = require('../../components/pages/ProfilePage');

// при отправке форме должен лететь запрос на сервер
// роут на добавление нового проекта
router.post('/', async (req, res) => {
  try {
    // мы должны на сервере забрать данные с инпутов
    const { name, description, length, location } = req.body;

    const { userId } = req.session;

    const newRoute = await Route.create({
      name,
      description,
      length: Number(length),
      location,
      // img,
      author_id: userId,
    });

    const route = await Route.findByPk(newRoute.id, {
      include: User,
      raw: true,
      nest: true,
    });

    // у нас принято в ответ на fetch-запрос всегда отправлять JSON
    res.json({
      success: true,
      // отправляем на клиент одну карточку проекта
      // doctype - false, потому что рендерим не всю страницу, а её часть
      html: res.renderComponent(VeloMarshCard, { route }, { doctype: false }),
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ success: false, message: error.message });
  }
});

router.post('/profile', async (req, res) => {
  try {
    // мы должны на сервере забрать данные с инпутов
    const { name, description, length, location } = req.body;

    const { userId } = req.session;

    const newRoute = await Route.create({
      name,
      description,
      length: Number(length),
      location,
      // img,
      author_id: userId,
    });

    const route = await Route.findByPk(newRoute.id, {
      include: User,
      raw: true,
      nest: true,
    });

    // у нас принято в ответ на fetch-запрос всегда отправлять JSON
    res.json({
      success: true,
      // отправляем на клиент одну карточку проекта
      // doctype - false, потому что рендерим не всю страницу, а её часть
      html: res.renderComponent(VeloMarshCard, { route }, { doctype: false }),
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ success: false, message: error.message });
  }
});

router.delete('/:routeId', async (req, res) => {
  try {
    const { routeId } = req.params;

    const result = await Route.destroy({
      where: { id: routeId, author_id: req.session.userId },
    }); // проверка на IDOR

    if (!result) {
      res.status(500).json({
        success: false,
        message: 'Это не твой проект, чтобы его удалять!',
      });
      return;
    }

    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
});

router.put('/:routeId', async (req, res) => {
  const { routeId } = req.params;

  const { name, description, length, location, img } = req.body;

  try {
    const result = await Route.update(
      {
        name,
        description,
        length,
        location,
        img,
      },
      {
        where: {
          id: routeId,
          author_id: req.session.userId, // проверка на IDOR
        },
      }
    );

    if (!result) {
      res.status(500).json({
        success: false,
        message: 'Нельзя изменять чужую идею',
      });
      return;
    }

    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
