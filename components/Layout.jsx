const React = require('react');
const Header = require('./Header');

function Layout({ children, user }) {
  return (
    <html lang="ru">
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
        crossOrigin="anonymous"
      />
      <head>
        {/* чтобы выводить нормально русский текст */}
        <meta charSet="UTF-8" />
        <title>/</title>
        <link rel="stylesheet" />
        <script defer src="/js/create.js" />
        <script defer src="/js/delete.js" />
        {/* <script defer src="/js/update.js" /> */}
        <script defer src="/js/auth.js" />
      </head>
      <body>
        <Header user={user} />
        <div className="container">{children}</div>
      </body>
    </html>
  );
}

module.exports = Layout;
