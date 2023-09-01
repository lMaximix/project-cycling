const React = require('react');

function VeloMarshCard({ route, user }) {
  return (
    <div
      className="card project-card col-sm-6"
      style={{ width: '18rem', marginBottom: '15px' }}
      data-id={route.id}
    >
      {/* <img src={project.img} className="card-img-top" alt="..." /> */}
      <div className="card-body">
        <h5 className="card-title">
          <a href={`/routes/${route.id}`}>{route.name}</a>
        </h5>
        <i>Добавлено автором: {route.User.login}</i>
        {user && user.id === route.userId && (
          <>
            <a href={`/routes/update-form/${route.id}`}>
              <button
                type="button"
                className="btn btn-info"
                style={{ marginRight: '10px' }}
              >
                Изменить
              </button>
            </a>
            <button type="button" className="btn btn-danger remove-project">
              Удалить
            </button>
          </>
        )}
      </div>
    </div>
  );
}

module.exports = VeloMarshCard;
