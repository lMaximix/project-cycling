const registrationForm = document.getElementById('registration-form');

if (registrationForm) {
  registrationForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const { login, password, mail } = e.target;

    const data = {
      login: login.value,
      password: password.value,
      mail: mail.value,
    };

    if (data.login === '' || data.password === '' || data.mail === '') {
      alert('Заполните все поля!');
      return;
    }

    try {
      const response = await fetch('/auth/registration', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      /*  обязательно нужно распарсить response, чтобы получить тело ответа */
      const body = await response.json();
      if (body.success) {
        window.location.href = '/';
      } else {
        alert(body.error);
      }
    } catch (error) {
      console.log(error);
    }
  });
}

const loginForm = document.getElementById('login-form');

if (loginForm) {
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const { login, password } = e.target;

    const data = {
      login: login.value,
      password: password.value,
    };

    if (data.login === '' || data.password === '') {
      alert('Заполните все поля!');
      return;
    }
    try {
      const response = await fetch('/auth/login', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      /*  обязательно нужно распарсить response, чтобы получить тело ответа */
      const body = await response.json();
      if (body.success) {
        window.location.href = '/';
      } else {
        alert(body.message);
      }
    } catch (error) {
      console.log(error);
    }
  });
}
