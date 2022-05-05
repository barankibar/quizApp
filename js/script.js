// Quiz
const quizData = [
    {
        question: "Brass gets discoloured in air because of the presence of which of the following gases in air?",
        a: "Oxygen",
        b: "Hydrogen sulphide",
        c: "Carbon dioxide",
        d: "Nitrogen",
        correct: "b"
    },{
        question: "Which of the following is a non metal that remains liquid at room temperature?",
        a: "Phosphorous",
        b: "Bromine",
        c: "Chlorine",
        d: "Helium",
        correct: "b"
    },{
        question: "Which of the following is used in pencils? ",
        a: "Graphite",
        b: "Silicon",
        c: "Charcoal",
        d: "Phosphorous",
        correct: "a"
    },{
        question: "Which of the following metals forms an amalgam with other metals? ",
        a: "Tin",
        b: "Zinc",
        c: "Lead",
        d: "Mercuryc",
        correct: "d"
    }
]


// DOM Items
const questionEl = document.getElementById("question");

const a_text = document.getElementById('aText');
const b_text = document.getElementById('bText');
const c_text = document.getElementById('cText');
const d_text = document.getElementById('dText');
const submitBtn = document.getElementById("submit");
const answerEls = document.querySelectorAll(".answer");


// Definations
let currentQuiz = 0;
let currentQuestion = 0;
let score = 0;
let answer = undefined;


// Quiz Declaration Function
loadQuiz();

function loadQuiz(){
    
    deSelectAnswer();

    questionEl.innerHTML = quizData[currentQuiz].question;

    a_text.innerHTML = quizData[currentQuiz].a;
    b_text.innerHTML = quizData[currentQuiz].b;
    c_text.innerHTML = quizData[currentQuiz].c;
    d_text.innerHTML = quizData[currentQuiz].d;

    currentQuestion++;
}

function checkAnswer(){
    
    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            return answer = answerEl.id;
        }
    });

    return answer;
}

submitBtn.addEventListener('click', ()=>{
    
    const answer = checkAnswer();

    if(answer){
        if(answer == quizData[currentQuiz].correct){
            score++;
        }
        
        currentQuiz++;
        
        if(currentQuiz < quizData.length){
            loadQuiz();
        }
        else{
            alert("You finished Your Score : " + score);
            location.reload();
        }  
    }
});

function deSelectAnswer(){

    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    })
}