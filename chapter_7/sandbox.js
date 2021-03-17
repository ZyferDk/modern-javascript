const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z\s]{6,12}$/;

// validation
form.addEventListener('submit', e => {
  e.preventDefault();

  const username =  form.username.value;

  if(usernamePattern.test(username)){
    feedback.textContent = 'that username is valid!'
  }
});

// live feedback
form.username.addEventListener('keyup', e => {
  console.log(e.target.id);
  if(usernamePattern.test(e.target.value)){
    // console.log('passed');
    form.username.setAttribute('class', 'success');
    feedback.textContent = 'great!'
    feedback.style.color = 'green';
  } else {
    //console.log('failed');
    form.username.setAttribute('class', 'error');
    feedback.textContent = 'error!';
    feedback.style.color = 'red';
  }
});
