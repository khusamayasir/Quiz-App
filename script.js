const quizData = [
    {
        question: 'How old is Usama?',
        a: '17',
        b: '10',
        c: '20',
        d: '24',
        correct: 'c'
    }, {
        question: 'What is the most used programming language in 2021 ?',
        a: 'JavaScript',
        b: 'Python',
        c: 'C++',
        d: 'R',
        correct: 'b'
    }, {
        question: 'Who is the president of Pakistan?',
        a: 'Khawaja Usama Yasir',
        b: 'Sarfaraz Ahmed',
        c: 'Farooq Laghari',
        d: 'Imran Khan',
        correct: 'd'
    }, {
        question: 'What dose HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Han Tum Mery Laal',
        c: 'Hum Tum Mile Lol',
        d: 'Heliopters Terminals Motorboats Lamborginis',
        correct: 'a'
    }, {
        question: 'In which year JavaScript launched?',
        a: '1994',
        b: '1995',
        c: '1996',
        d: 'none of the above',
        correct: 'd'
    }  
];

const quiz = document.getElementById("quiz")
const answersEls = document.querySelectorAll(".answer")
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answersEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answersEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    //Check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct ) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML =  `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2> 
            <button onclick = "location.reload()">Reload</button>`
        }
    }
});