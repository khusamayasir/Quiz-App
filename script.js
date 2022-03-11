const quizData = [
    {
        question: 'How odl is Usama?',
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

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuestion];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    currentQuestion++;
}

submitBtn.addEventListener('click, ()')