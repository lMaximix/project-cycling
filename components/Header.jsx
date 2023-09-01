const React = require('react');

function Header({ user }) {
  let contentNavBar;

  if (user) {
    contentNavBar = (
      <>
        <div>{`Привет, ${user.login}!`}</div>
        <a href="/profile" className="btn btn-info">
          Профиль
        </a>
        <a href="/auth/logout">Выйти</a>
      </>
    );
  } else {
    contentNavBar = (
      <>
        <div>Добро пожаловать!</div>
        <a href="/auth/registration">Регистрация</a>
        <a href="/auth/login">Авторизация</a>
      </>
    );
  }

  return (
    <header>
      <nav>
        <div className="container">
          <a href="/">Веломаршруты</a>
          <div>{contentNavBar}</div>
        </div>
      </nav>
    </header>
  );
}

module.exports = Header;
