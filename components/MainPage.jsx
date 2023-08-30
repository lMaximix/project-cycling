const React= require('react')
const Layout = require('../Layout');

function MainPage(){
  return(
    <Layout user={user} title={title}>
      <div id="projects-container" className="row">
        {projects.map((projectObj) => (
          // <ProjectCard
          //   key={projectObj.id}
          //   project={projectObj}
          //   user={user}
          // />
        ))}
      </div>
    </Layout>
  )

}

module.exports=MainPage