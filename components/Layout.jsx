const React = require('react');
const Header = require('./Header');

function Layout({ children, user }) {
  return (
    <html lang="ru">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
          crossOrigin="anonymous"
        />
        {/* чтобы выводить нормально русский текст */}
        <meta charSet="UTF-8" />
        <title>Сюда кто нибудь смотрит?</title>
        <link rel="stylesheet" href="/css/style.css" />
        <script defer src="/js/create.js" />
        <script defer src="/js/delete.js" />
        {/* <script defer src="/js/update.js" /> */}
        <script defer src="/js/auth.js" />
        <script src="https://mapgl.2gis.com/api/js/v1"></script>
        <script src="https://unpkg.com/@2gis/mapgl-directions@^2/dist/directions.js"></script>
        <script defer src="/js/2gisMaps.js" />
      </head>
      <body>
        <Header user={user} />
        {children}
      </body>
    </html>
  );
}

module.exports = Layout;
