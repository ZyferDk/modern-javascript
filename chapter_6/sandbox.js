// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//   console.log('you clicked me');
// });

const items = document.querySelectorAll('li');

items.forEach(item => {
  item.addEventListener('click', e => {
    // console.log('item clicked');
    // console.log(e);
    // console.log(e.target);
    // console.log(item);
    // e.target.style.textDecoration = 'line-through';
    const style = e.target.style;
    const classList = e.target.classList
    if (style.backgroundColor === "green") {
      style.backgroundColor = '';
      classList.remove('adk')
    } else {
      style.backgroundColor = 'green';
      classList.add('adk')
    }
  });
});