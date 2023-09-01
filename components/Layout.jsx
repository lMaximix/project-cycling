const React = require('react');
const Header = require('./Header');

function Layout({ children, user }) {
  return (
    <html lang="ru">
      <head>
        {/* чтобы выводить нормально русский текст */}
        <meta charSet="UTF-8" />
        <title>/</title>
        <link rel="stylesheet" />
        {/* <script defer src="/js/create.js" />
        <script defer src="/js/delete.js" />
        <script defer src="/js/update.js" />
        <script defer src="/js/auth.js" /> */}
      </head>
      <body>
        <Header user={user} />
        <div className="container">{children}</div>
      </body>
    </html>
  );
}

module.exports = Layout;
