const React = require('react');
const Layout = require('../Layout');
const VeloMarshCard = require('../VeloMarshCard');
const { head } = require('../../routes/views/main.routes');

function MainPage({ routes, user }) {
  return (
    <Layout user={user} /* title={}*/>
      <div id="routes-container" className="row">
        {routes.map((projectObj) => (
          <VeloMarshCard key={projectObj.id} route={projectObj} user={user} />
        ))}
      </div>
      
    </Layout>
  );
}

module.exports = MainPage;
