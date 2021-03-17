const correctAnswers = ['B', 'A', 'B', 'B', 'A'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

let ajidk = form.querySelectorAll('.lead');
// ajidk.forEach(type => console.log(type))
console.log(ajidk[0].innerText);


form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];

    // check the answers
    userAnswers.forEach((answer, i) => {
        if (answer === correctAnswers[i]) {
            score += 20;
        }
    });

    // log the score to console
    console.log(result.querySelector('span'));
    result.querySelector('span').textContent = `${score}%`;
    result.classList.remove('d-none')

    console.log(score);

});