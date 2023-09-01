const React = require('react');
const Layout = require('../Layout');

function VeloMarshPage({ route, user }) {
  return (
    <Layout user={user}>
      <div>
        <h3>{route.name}</h3>
        <p>Длина маршрута:{route.length}</p>
        <p>{route.description}</p>
        <p> {route.location}</p>
        <img src="" alt="картинка маршрута" />
      </div>
      <script defer src="/js/create.js" />
    </Layout>
  );
}

module.exports = VeloMarshPage;
