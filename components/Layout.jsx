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
                <script src="https://api-maps.yandex.ru/v3/?apikey=b963d0ca-e363-4973-9774-670a40c79830
&lang=ru_RU"></script>
      <script defer src="/js/yandexMaps.js" />
      </head>
      <body>
        <Header user={user} />
        <div id="map" class="map"></div>
        
      </body>
    </html>
  );
}

module.exports = Layout;
