const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const submit = document.querySelector('.submit');

// submit.addEventListener('click', () => {
//     console.log('bismillah');
// setInterval(() => {
//     submit.scrollTop = 0;
// },2000)
// submit.scrollTop = 0;
// })

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    // check the answers
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 25;
        }
    });

    // show the submit
    // scrollTo(0, 0),
    result.querySelector('span').textContent = `${score}%`;
    result.classList.remove('d-none');
});

submit.addEventListener('click', () => window.scrollTo({
    top: 0,
    behavior: 'smooth',
}));



// window object (the global object)

// console.log(window);

// console.log('hello');
// window.console.log('hello');

// console.log(document.querySelector('form'));
// console.log(window.document.querySelector('form'));

// alert('hello');
// window.alert('hello again');

setTimeout(() => {
    console.log('sok pasti bisa kok');
}, 1000);