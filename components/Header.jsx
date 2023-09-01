const React = require('react');

function Header({ user }) {
  let contentNavBar;

  if (user) {
    contentNavBar = (
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <a className="navbar-brand"></a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarNav"
          style={{ backgroundColor: '#20B2AA' }}
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link disabled mr-4">Привет, {user.login}!</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mr-4" href="/profile">
                Личный кабинет
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mr-4" href="/auth/logout">
                Выйти
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Главная
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  } else {
    contentNavBar = (
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link mr-4" href="/auth/login">
                Войти
              </a>
            </li>
            <li className="nav-item mr-4">
              <a className="nav-link mr-4" href="/auth/registration">
                Зарегистрироваться
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Главная
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

  return (
    <header>
      <nav>
        <div className="container">
          <div>{contentNavBar}</div>
        </div>
      </nav>
    </header>
  );
}

module.exports = Header;
