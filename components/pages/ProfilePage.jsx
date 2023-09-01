const React = require('react');
const Layout = require('../Layout');
const ProfileInfo = require('./ProfileInfo');
const NewVeloMarshForm = require('../NewVeloMarshForm');
const VeloMarshCard = require('../VeloMarshCard');

function ProfilePage({ routes, user }) {
  return (
    <Layout user={user}>
      <div className="card" style={{ width: '18rem', marginLeft: '28px' }}>
        <div className="card-header">Ваши персональные данные</div>
        <ProfileInfo user={user} />
      </div>
      <div style={{ marginLeft: '28px' }}>
        <NewVeloMarshForm />
      </div>

      <div
        id="my-routes-container"
        className="row"
        style={{ marginLeft: '28px' }}
      >
        {routes.map((projectObj) => (
          <VeloMarshCard
            key={projectObj.id}
            route={projectObj}
            user={user}
            page="profile"
          />
        ))}
      </div>
    </Layout>
  );
}

module.exports = ProfilePage;
