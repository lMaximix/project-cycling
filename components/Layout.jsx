const React = require('react');
const Header = require('./Header');

function Layout({ children, user }) {
  return (
    <html lang="ru">
      <head>
        {/* чтобы выводить нормально русский текст */}
        <meta charSet="UTF-8" />
        <title>/</title>
        <link rel="stylesheet" href="/css/style.css"/>
        {/* <script defer src="/js/create.js" />
        <script defer src="/js/delete.js" />
        <script defer src="/js/update.js" />
        <script defer src="/js/auth.js" /> */}
                <script src="https://mapgl.2gis.com/api/js/v1"></script>
                <script src="https://unpkg.com/@2gis/mapgl-directions@^2/dist/directions.js"></script>
      <script defer src="/js/2gisMaps.js" />
      </head>
      <body>
        <Header user={user} />
        <div id="container"></div>
        
      </body>
    </html>
  );
}

module.exports = Layout;
