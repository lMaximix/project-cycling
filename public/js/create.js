// получаем форму добавления по id
const form = document.getElementById('new-project-form');

// контейнер, в который будем добавлять новые проекты
const container = document.getElementById('routes-container');

// отслеживаем отправку формы
form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const { name, description, length, location } = form;

  const data = {
    name: name.value,
    description: description.value,
    length: length.value,
    location: location.value,
    // img: img.value,
  };

  console.log(data);

  try {
    const response = await fetch('/routes', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        // сообщаем серверу, что тело запроса придёт в формате JSON
        'Content-Type': 'application/json',
      },
    });

    // 200-299
    if (response.ok) {
      // показываем что ответ пришёл в JSON
      const result = await response.json();

      // берём отрендеренный HTML
      const html = result.html;

      // добавить html в контейнер
      container.insertAdjacentHTML(
        // куда добавить
        'beforeend',
        // что добавить
        html
      );
      // очищаю инпуты в форме
      form.reset();
    } else {
      const data = await response.json();
      console.log(data.message);
    }
  } catch (error) {
    console.log(error);
  }
});
