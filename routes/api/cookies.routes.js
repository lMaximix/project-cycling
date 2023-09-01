const router = require('express').Router();

router.get('/read-my-cookies', (req, res) => {
  // в объекте req.cookies лежат все куки клиента
  console.log(req.cookies);

  res.json({ ok: true });
});

router.get('/plus-times', (req, res) => {
  const { times } = req.cookies;

  // вот так я инициализирую создание куки на клиенте
  res.cookie('times', Number(times) + 1);
  res.end();
});

module.exports = router;
