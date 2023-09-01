const projectsContainer = document.querySelector('#projects-container');

// мы делегируем событие родительскому контейнеру
projectsContainer.addEventListener('click', async (event) => {
  // проверяет, это кнопка удалить?
  if (event.target.classList.contains('remove-project')) {
    const button = event.target;

    const projectCard = button.closest('.project-card');

    const { id } = projectCard.dataset;

    await fetch(`/projects/${id}`, {
      method: 'DELETE',
    });

    // удаляем карточку из DOM
    projectCard.remove();
  }
});
