// const question = document.getElementsByClassName('.closed-question');
// const answer = document.querySelector('.closed-answer');
// const sign = document.querySelector('.plus');
//
//
// const themeButton = document.querySelector('dt');
// themeButton.onclick = function() {
//     // question.classList.toggle('closed-question');
//     // question.classList.toggle('open-question');
//
//     sign.classList.toggle('plus');
//     sign.classList.toggle('minus');
// };
//
// for (question of content.classList) {
//
// }

// const question = document.getElementsByClassName('.closed-question');
// const themeButton = document.querySelector('dt');
//
// for (const value of question) {
//     themeButton.onclick = function() {
//         console.log(value);
//     }
//
// }

// const answer = document.getElementsByClassName('closed-answer');
// const themeButton = document.querySelector('dt');
//
// for (const faq of answer) {
//     themeButton.onclick = function (
//         answer.classList.toggle('closed-answer');
//         answer.classList.toggle('open-answer');
//     )
// }

// Получаем все заголовки
const questions = document.getElementsByClassName('question');

for (const question of questions) {
    // Добавляем для каждого обработку события клика
    question.addEventListener('click', function (e) {
        // Закрываем все блоки, открываем тот, по которому нажали
        changeActive(e);
    });
}

function changeActive(e) {
    // Перебираем все блоки
    for (const question of questions) {
        // Ищем в родителе блок ответа (getElementsByClassName возвращает массив, поэтому в конце берем 0, он же первый элемент)
        const answer = question.getElementsByClassName('answer')[0];
        // Ищем в родителе иконки
        const icon = question.getElementsByClassName('icon')[0];

        // Если элемент цикла равен элементу по которому мы кликнули - показываем ответ, меняем иконку
        // В обработном случае (для всех остальных) скрываем контент и оставляем плюс
        if (e.target === question) {
            answer.classList.toggle('open-answer');
            icon.classList.toggle('plus');
            icon.classList.toggle('minus');
        } else {
            answer.classList.remove('open-answer');
            icon.classList.add('plus');
            icon.classList.remove('minus');
        }
    }
}
