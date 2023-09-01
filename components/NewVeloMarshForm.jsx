const React = require('react');

function NewVeloMarshForm() {
  return (
    <div>
      <h3>Добавь новый маршрут</h3>
      <form id="new-project-form">
        <div className="mb-3">
          <label className="form-label">
            Название маршрута:
            <input type="text" className="form-control" name="name" />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Описание маршрута:
            <input type="text" className="form-control" name="description" />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Длинна маршрута
            <input type="number" className="form-control" name="length" />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Локация маршрута
            <input type="text" className="form-control" name="location" />
          </label>
        </div>
        {/* <div className="mb-3">
          <label className="form-label">
            Картинка
            <input type="text" className="form-control" name="img" />
          </label>
        </div> */}

        <button type="submit" className="btn btn-outline-warning" Warning>
          Отправить
        </button>
      </form>
    </div>
  );
}

module.exports = NewVeloMarshForm;
