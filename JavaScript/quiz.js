document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        {
            question: "How many hours do you spend on household chores each day?",
            choices: ["under 30 min", "1-2 hours", "2 hours and over"],
            points: [1, 2, 3]
            
        },
        {
            question: "How often do you find it difficult to balance work, personal life, and household tasks?",
            choices: ["sometimes", "most of the time", "all the time"],
            points: [1, 2, 3]
        },
        {
            question: "How important is cost-effectiveness when you choose a service?",
            choices: ["not at all", "ok", "really important"],
            points: [1, 2, 3]
        },
        {
            question: "How important is it to you that a portion of your spending goes towards a good cause?",
            choices: ["not really", "kinda important", "really important"],
            points: [1, 2, 3]
        },
        {
            question: "Do you find it challenging to get help for small tasks immediately when you need it?",
            choices: ["no", "yes", "I haven't posted any task"],
            points: [1, 2, 3]
        },
        {
            question: "Have you ever hesitated to hire someone for a task due to concerns about reliability and safety?",
            choices: ["no", "maybe", "yes"],
            points: [1, 2, 3]
        }
    ];

    let currentQuestionIndex = 0;
    let totalScore = 0;

    const questionElement = document.getElementById('question');
    const choicesElement = document.getElementById('choices');
    const progressElement = document.getElementById('progress');
    const resultElement = document.getElementById('result'); // Element to display the result

    function updateQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;
        choicesElement.innerHTML = '';
        currentQuestion.choices.forEach((choice, index) => {
            const button = document.createElement('button');
            button.textContent = choice;
            button.classList.add('choice-button');
            button.addEventListener('click', () => selectChoice(index));
            choicesElement.appendChild(button);
        });
        progressElement.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
    }

    function selectChoice(choiceIndex) {
        // Add points to the total score
        totalScore += questions[currentQuestionIndex].points[choiceIndex];

        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            updateQuestion();
        } else {
            displayResult();
        }
    }

    function displayResult() {
        // Logic to display different outcomes based on the score
        let outcome;
        if (totalScore <= 6) {
            outcome = "Fibaste can make your life a much easier";
        } else if (totalScore <= 12) {
            outcome = "Fibaste will help in your life and you will get more time to things that matters the most";
        } else {
            outcome = "We can save multiple hours on a daily basis by delegating chores";
        }

        resultElement.textContent = `Your result: ${outcome}`;
    }

    updateQuestion();
});