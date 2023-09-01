const React = require('react');
const Layout = require('../Layout');
const ProfileInfo = require('./ProfileInfo');
const NewVeloMarshForm = require('../NewVeloMarshForm');
const VeloMarshCard = require('../VeloMarshCard');

function ProfilePage({ routes, user }) {
  return (
    <Layout user={user}>
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-header">Ваши персональные данные</div>
        <ProfileInfo user={user} />
      </div>
      <NewVeloMarshForm />
      <div id="my-routes-container" className="row">
        {routes.map((projectObj) => (
          <VeloMarshCard key={projectObj.id} route={projectObj} user={user} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = ProfilePage;
