const ul = document.querySelector('ul');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  const li = document.createElement('li');
  li.textContent = 'something new to do';
  ul.appendChild(li);
});


// items.forEach(item => {
//   item.addEventListener('click', e => {
//     // e.target.style.textDecoration = 'line-through';
//     e.target.remove();
//   });
// });

ul.addEventListener('click', e => {
  const items = document.querySelectorAll('li');
  items.forEach(item => {
    item.addEventListener('click', e => {
      e.target.remove();
    })
  })
})