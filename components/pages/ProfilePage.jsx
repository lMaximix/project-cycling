const React = require('react');
const Layout = require('../Layout');
const ProfileInfo = require('./ProfileInfo');
const NewVeloMarshForm = require('../NewVeloMarshForm');

function ProfilePage({ user }) {
  return (
    <Layout user={user}>
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-header">Ваши персональные данные</div>
        <ProfileInfo user={user} />
      </div>
      <NewVeloMarshForm />
    </Layout>
  );
}

module.exports = ProfilePage;
