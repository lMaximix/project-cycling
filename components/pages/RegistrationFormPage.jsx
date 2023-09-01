const React = require('react');
const Layout = require('../Layout');

function RegistrationForm({ user }) {
  return (
    <Layout>
      <form style={{ marginTop: '30px' }} id="registration-form">
        <h2>Регистрация</h2>
        <div className="mb-3">
          <label className="form-label">
            Логин
            <input type="text" className="form-control" name="login" />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Пароль
            <input type="password" className="form-control" name="password" />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            E-m@il
            <input type="email" className="form-control" name="mail" />
          </label>
        </div>
        <div id="error-message" />
        <button type="submit" className="btn btn-outline-warning">
          Зарегистрироваться
        </button>
        <script defer src="/js/auth.js" />
      </form>
    </Layout>
  );
}

module.exports = RegistrationForm;
