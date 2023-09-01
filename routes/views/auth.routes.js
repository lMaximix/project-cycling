const router = require('express').Router();
const RegistrationFormPage = require('../../components/pages/RegistrationFormPage');
const LoginFormPage = require('../../components/pages/LoginFormPage');

router.get('/registration', (req, res) => {
  const html = res.renderComponent(RegistrationFormPage);

  res.send(html);
});

router.get('/login', (req, res) => {
  res.send(res.renderComponent(LoginFormPage));
});

router.get('/logout', (req, res) => {
  // удаление сессии на сервере
  req.session.destroy((error) => {
    if (error) {
      return res.status(500).json({ message: 'Ошибка при удалении сессии' });
    }
    // + нужно очистить куку
    res
      .clearCookie('user_sid') // серверное удаление куки по имени
      .redirect('/');
  });
});

module.exports = router;
