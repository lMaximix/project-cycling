const router = require('express').Router();
const bcrypt = require('bcrypt');

const { User } = require('../../db/models');

router.post('/registration', async (req, res) => {
  const { login, password, mail } = req.body;
  console.log(login, password, mail);

  if (login === '' || password === '' || mail === '') {
    res.status(404).json({ success: false, message: 'Заполните все поля' });
  }

  try {
    const hash = await bcrypt.hash(password, 10);

    const user = await User.create({ login, password: hash, mail });

    res.cookie('user', login);

    //  инициализирую сессию (а пакет express-session сам создаст такую куку, какую мы прописали в настройках configSession)
    req.session.userId = user.id;

    res.locals.user = user;

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.post('/login', async (req, res) => {
  const { login, password } = req.body;

  try {
    // проверить, есть ли такой юзер в бд
    const user = await User.findOne({ where: { login } });

    if (!user) {
      res.status(404).json({
        success: false,
        message: 'Такого пользователя не существует (ты кто?)',
      });
      return;
    }

    //  проверить пароли
    if (await bcrypt.compare(user.password, password)) {
      res.status(404).json({
        success: false,
        message: 'Неправильный пароль',
      });
      return;
    }

    //  инициализирую сессию
    req.session.userId = user.id;

    res.locals.user = user;

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
