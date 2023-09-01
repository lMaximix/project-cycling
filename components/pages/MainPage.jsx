const React = require('react');
const Layout = require('../Layout');
const VeloMarshCard = require('../VeloMarshCard');
const { head } = require('../../routes/views/main.routes');

function MainPage({ routes, user }) {
  console.log(123123123);
  return (
    <Layout user={user} /* title={}*/>
      <div id="routes-container" className="row" style={{ marginLeft: '24px' }}>
        {routes.map((projectObj) => (
          <VeloMarshCard key={projectObj.id} route={projectObj} user={user} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = MainPage;

// <div class="row row-cols-1 row-cols-md-2 g-4">
//   <div class="col">
//     <div class="card">
//       <img src="..." class="card-img-top" alt="...">
//       <div class="card-body">
//         <h5 class="card-title">Card title</h5>
//         <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//       </div>
//     </div>
//   </div>
