const React = require('react');

function VeloMarshCard({ route, user, page = 'main' }) {
  console.log(route);
  return (
    <div
      className="card project-card  row-cols-md-2 g-4"
      style={{ width: '18rem', marginBottom: '15px' }}
      data-id={route.id}
    >
      <div className="card-body">
        <img
          src="/images/picture.png"
          alt="картинка!!!"
          style={{ width: '70%' }}
        />
        <h5 className="card-title">
          <a href={`/routes/${route.id}`}>{route.name}</a>
        </h5>
        <i>Добавлено автором: {route.User.login}</i>
        {user && page === 'profile' && user.id === route.author_id && (
          <>
            <button
              type="button"
              className="btn btn-outline-danger remove-project"
              Danger
            >
              Удалить
            </button>
          </>
        )}
      </div>
    </div>
  );
}

module.exports = VeloMarshCard;
