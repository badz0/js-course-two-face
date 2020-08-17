const date = new Date(2000, 0, 1, 1, 1);

date.setMonth(11);
date.setFullYear(1999);
// console.log('date: ', date);


const date2 = new Date('2222-5-01');
// console.log('date2: ', 
//   date2.toLocaleString('ua', {year: '2-digit'}) + ' ' +
//   date2.toLocaleString('ua', {
//     month: 'long',
//   })
// );

function isAdult(date) {
  const adultDate = new Date();

  adultDate.setFullYear(adultDate.getFullYear() - 18);

  return adultDate > Date.parse(date);
}

// console.log(isAdult('2005-10-10'));
// console.log(Date.now() - Date.parse('2000-01-01'));
// YYYY-MM-DDTHH:mm:ss.sss




function hello(msg) {
  console.log('hey' + msg);
}



// const intervalId = setInterval(() => {
//   hello('whats up')
// }, 1000);

// const timeoutId = setTimeout(() => {
//   console.log('stopped');
//   clearInterval(intervalId);
// }, 5000);


// setTimeout(() => {
  // console.log('hey');
// }, 0);

// console.log('yo');


// function hello(msg) {
//   console.log('hey' + msg);
// }

// const yoWrap = () => hello('yo')

// document.addEventListener('click', yoWrap);
// document.removeEventListener('click', yoWrap);


function doPushups(n, onFinish) {
  setTimeout(() => {
    console.log('pushups done');
    onFinish();
  }, n * 500);
}

// doPushups(5, () => {
//   console.log('yes, lets do some more');
//   doPushups(6, () => {
//     console.log('good job');
//     doPushups(6, () => {
//       console.log('good job');
//       doPushups(6, () => {
//         console.log('good job');
//       });
//     });
//   });
// });

const ivan = {
  name: 'ivan',
  pushupTime: 300
};

const guest = {
  name: 'guest',
  pushupTime: 800
};

function doPromisePushups(n, user) {
  if (n < 0) {
    return Promise.reject('sorry wrong input');
  }
  if (n === 0) {
    return Promise.resolve('well done 0 is pretty easy to do');
  }
  return new Promise((resolve, reject) => {
    if (n > 100) {
      reject('sorry too many for you');
    } else {
      setTimeout(() => {
        console.log('pushups done');
        resolve(user);
      }, n * user.pushupTime);
    }
  });
}

function hey() {
  console.log('hey');
}

// Promise.all([doPromisePushups(5, ivan), doPromisePushups(5, guest)]).then(() => {
//   console.log('well done guys');
// });

// Promise.race([doPromisePushups(5, ivan), doPromisePushups(5, guest)]).then((data) => {
//   console.log(data);
// }).catch((msg) => {
//   console.log('msg: ', msg);
// });



// doPromisePushups(-10).then(
//   () => {
//     console.log('yes I did it');
//   }).catch(() => {
//     console.log(':(');
//   });


// doPromisePushups(0).then(() => {
//   console.log('yes I did it');
//   return doPromisePushups(5);
// }).then(() => {
//   console.log('hurray');
// }).catch(() => {
//   console.log(`something went wrong`);
// }).finally(() => {
//   console.log('anyway it was a good training');
// });



function createTimer(time, onFinish) {
  const timerEl = document.createElement('h2');

  const timerId = setInterval(() => {
    const min = Math.floor(time / 60);
    const sec = time - 60 * min;

    timerEl.innerText = `${('0' + min).substr(-2)}:${('0' + sec).substr(-2)}`;
    time--;
    if (time < 0) {
      clearInterval(timerId);
      onFinish();
    }
  }, 1000);

  document.body.append(timerEl);
}

// createTimer(10, () => console.log('first timer is off'));

// createTimer(5, () => console.log('second timer is off'));


function createPromiseTimer(time) {
  return new Promise((resolve) => {
    createTimer(time, resolve)
  });
}

// createPromiseTimer(5).then(() => console.log('promise timer is off'))



async function train() {
  await doPromisePushups(4, ivan);
  console.log('yes I did it');
  await doPromisePushups(5, ivan);
  console.log('hurray');
  await doPromisePushups(20, ivan);
  console.log('enough for today');

  // }).catch(() => {
  //   console.log(`something went wrong`);
  // }).finally(() => {
  //   console.log('anyway it was a good training');
  // });
}

// train();

async function groupTraining() {
  // await Promise.all([doPromisePushups(5, ivan), doPromisePushups(5, guest)]);
  const ivanPromise = doPromisePushups(5, ivan);
  const guestPromise = doPromisePushups(5, guest);
  await ivanPromise;
  await guestPromise;
  console.log('well done guys');
}
// groupTraining();

async function competition() {
  try {
    const winner = await Promise.race([doPromisePushups(-20, ivan), doPromisePushups(5, guest)]);
    console.log('winner: ', winner);
  } catch (msg) {
    console.log(msg);
  }
}

competition();
