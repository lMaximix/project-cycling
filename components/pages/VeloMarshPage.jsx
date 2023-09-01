const React = require('react');
const Layout = require('../Layout');

function VeloMarshPage({ route, user }) {
  return (
    <Layout user={user}>
      <div style={{ marginLeft: '28px' }}>
        <div id="container"></div>
        <h3>{route.name}</h3>
        <p>Длина маршрута: {route.length}</p>
        <p>Описание: {route.description}</p>
        <p>Месторасположение: {route.location}</p>
      </div>
      <script src="https://mapgl.2gis.com/api/js/v1"></script>
      <script src="https://unpkg.com/@2gis/mapgl-directions@^2/dist/directions.js"></script>
      <script defer src="/js/2gisMaps.js" />
      <script defer src="/js/create.js" />
    </Layout>
  );
}

module.exports = VeloMarshPage;
