// /users/{id}/posts/{post_id}/comments/
// /users/{id}/posts/{post_id}/comments?page=3



const BASE = 'https://gorest.co.in/public-api/';
const KEY = 'e0dcd22de287c749b30f3ebe066f87751f2ede6f42e4148ff47a6be2411c392b';

async function getUsers(page) {
  const config = {
    method: 'GET',
    url: BASE + 'users',
    params: {
      page: page
    }
  };

  try {
    const res = await axios(config);
    return res.data.data;
  } catch {
    console.log('something went wrong');
  };

  // return axios(config).then((res) => {
  //   return res.data.data;
  // }).catch(() => {
  //   console.log('something went wrong');
  // });
}

function renderUsers(users = []) {
  const container = document.querySelector('.users');
  container.innerHTML = '';

  users.forEach(user => {
    const userElement = document.createElement('div');
    userElement.className = 'user';
    userElement.innerHTML = `
      <h3>${user.name}</h3>
      <h4>${user.email}</h4>
    `;
    container.append(userElement);
  });
}


function createUser() {
  const name = document.createUser.name.value;
  const email = document.createUser.email.value;
  if (!name || !email) return;
  
  axios.post(BASE + 'users', {
    name,
    email,
    gender: 'Female',
    status: 'Active'
  }, {
    headers: {'Authorization': 'Bearer ' + KEY},
  }).then((res) => {
    document.createUser.name.value = '';
    document.createUser.email.value = '';

    saveUser(res.data.data.id);
  }).catch(() => {
    console.log('ooops');
  });
}

function saveUser(id) {
  if (!id) return;

  let users = localStorage.getItem('users');
  if (!users) users = [];
  else users = JSON.parse(users);

  users.push(id);

  localStorage.setItem('users', JSON.stringify(users));
}


function paginationInit() {
  let currentPage = 1;
  document.getElementById('prev').addEventListener('click', () => {
    if (currentPage < 1) return;
    getUsers(--currentPage).then(renderUsers);
  });
  document.getElementById('next').addEventListener('click', () => {
    getUsers(++currentPage).then(renderUsers);
  });
}

function displaySavedUsers() {
  let users = localStorage.getItem('users');
  if (!users) return;
  users = JSON.parse(users);

  Promise.all(users.map(id => {
    return axios.get(`${BASE}users/${id}`).then(res => {
      if (res.data.data.id) {
        return res.data.data;
      } else return Promise.reject('used wansnt found');
    });
  })).then(renderUsers).catch((err) => {
    console.log('err: ', err);
  });
}

document.querySelector('#displaySaved')
  .addEventListener('click', displaySavedUsers)

document.getElementById('create')
  .addEventListener('click', createUser)


paginationInit();

// getUsers().then(renderUsers);

async function fetchUsers(page = 1) {
  try {
    const res = await fetch(`${BASE}users?page=${page}`);
    if (res.ok) {
      const body = await res.json();
      return body.data;
    } else {
      throw new Error('http error')
    }
  } catch(err) {
    console.log('err: ', err);
    console.log('something went wrong');
  };
}


fetchUsers().then(renderUsers);

