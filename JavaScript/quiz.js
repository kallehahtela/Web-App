let currentQuestion = 0;
let score = 0;
let questions = [
    {
        question: "What is 2+2?",
        choices: ["3", "4", "5", "6"],
        answer: 1
    },
    // Add more questions here
];

function startQuiz() {
    showQuestion();
}

function showQuestion() {
    let question = questions[currentQuestion];
    document.getElementById("question").textContent = question.question;
    let choices = document.querySelectorAll(".choice");
    choices.forEach((choice, index) => {
        choice.textContent = question.choices[index];
    });
}

function selectAnswer(choice) {
    if (choice === questions[currentQuestion].answer) {
        score++;
    }
    nextQuestion();
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById("quiz").innerHTML = `<h2>Your score: ${score}/${questions.length}</h2>`;
}

// Start the quiz
startQuiz();