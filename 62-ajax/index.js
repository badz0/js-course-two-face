const KEY = 'e0dcd22de287c749b30f3ebe066f87751f2ede6f42e4148ff47a6be2411c392b'
const BASE = 'https://gorest.co.in/public-api'


async function getUsers(nameFilter) {
  try {
    // headers: {'Authorization': 'Bearer ' + KEY},
    const config = {
      params: {name: nameFilter, page: 85}
    };

    const res = await axios.get(BASE + '/users', config);

    return res.data.data;
  } catch (err) {
    console.log('something bad happened');
    return [];
  }
}

function renderUsers(users) {
  const container = document.querySelector('.users');
  container.innerHTML = '';
  const fragment = new DocumentFragment();
  users.forEach(user => {
    const userDiv = document.createElement('div');
    userDiv.classList.add('user');
    userDiv.innerHTML = `
      <h4>${user.name}</h4>
      <h5>${user.email}</h5>
    `;
    const remove = document.createElement('button');
    remove.innerText = 'X';
    remove.className = 'user__remove';
    remove.addEventListener('click', () => {
      removeUser(user.id);
    });
    userDiv.append(remove);
    fragment.append(userDiv);
  })
  container.append(fragment);
}
const instance = axios.create({
  headers: {'Authorization': 'Bearer ' + KEY}
});

function createUser(name, email) {
  // headers: {'Authorization': 'Bearer ' + KEY},
  const config = {
    method: 'POST',
    data: {
      name: name,
      email,
      status: 'Inactive',
      gender: 'Male'
    }
  };

  return instance(BASE + '/users', config).catch((err) => {
    console.log('errr', err);
  });
}

document.filterForm.elements.filterApply.addEventListener('click', async function(event) {
  const val = document.filterForm.elements.filterInput.value;
  if (!val) return;
  
  const users = await getUsers(val);
  document.filterForm.elements.filterInput.value = '';
  renderUsers(users);
});

const emailEl = document.querySelector('#email');
const btnCreate = document.querySelector('#create');

btnCreate.addEventListener('click', () => {
  if (document.createUser.name.value && emailEl.value) {
    createUser(document.createUser.name.value, emailEl.value)
      .then(() => {
        document.createUser.name.value = '';
        emailEl.value = '';
      });
  }
});

getUsers().then((users) => {
  renderUsers(users);
});
// getUsers().then(renderUsers)





const containerEl = document.querySelector('.details');
containerEl.addEventListener('click', function(event) {
  if (this !== event.target) return;
  this.classList.remove('shown')
});

function getDetails(movie) {
  axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/credits` + key).then(res => {
    console.log('res: ', res);
    containerEl.classList.add('shown');
    console.log('containerEl.firstChild: ', containerEl.firstChild);
    containerEl.firstElementChild.innerHTML = `
      <img class="movie__img" src="https://image.tmdb.org/t/p/original${movie.poster_path}">
      <h4>${movie.title}</h4>
      <p>
        ${res.data.cast.map(item => item.character).join(', ')}
      </p>
    `;
  });
}
