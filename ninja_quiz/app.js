const correctAnswers = ['B', 'A', 'B', 'B', 'A'];
const form = document.querySelector('.quiz-form');

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
    console.log(score);

});