const questions = [
    
    {
        question: "Quel langage de programmation ai-je utilisé dans mon PFE ?",
        answers: [
            { text: "Python", correct: false },
            { text: "ASP.NET", correct: true },
            { text: "Java", correct: false },
            { text: "PHP", correct: false },
        ]
    },
    {
        question: "Quel framework Frontend ai-je utilisé dans mes projets ?",
        answers: [
            { text: "React", correct: false },
            { text: "Angular", correct: true },
            { text: "Vue.js", correct: false },
            { text: "Ember.js", correct: false },
        ]
    },
    {
        question: "Quelle formation associative ai-je suivie ?",
        answers: [
            { text: "Design Thinking", correct: false },
            { text: "Formation Arduino", correct: true },
            { text: "Leadership", correct: false },
            { text: "SEO", correct: false },
        ]
    },
    {
        question: "Quel sport est l'un de mes favoris ?",
        answers: [
            { text: "Football", correct: true },
            { text: "Basketball", correct: false },
            { text: "Tennis", correct: false },
            { text: "Natation", correct: false },
        ]
    },
    {
        question: "Dans quelle matière suis-je spécialisé ?",
        answers: [
            { text: "Mathématiques", correct: true },
            { text: "Chimie", correct: false },
            { text: "Histoire", correct: false },
            { text: "Physique", correct: false },
        ]
    },
    {
        question: "Quel était l'objectif principal de mon PFE ?",
        answers: [
            { text: "Créer une application mobile", correct: false },
            { text: "Moderniser une application Web", correct: true },
            { text: "Concevoir un système IoT", correct: false },
            { text: "Réaliser un projet de data science", correct: false },
        ]
    },
    {
        question: "Quel SGBD ai-je utilisé dans mes projets ?",
        answers: [
            { text: "MySQL", correct: true },
            { text: "Oracle", correct: false },
            { text: "PostgreSQL", correct: false },
            { text: "SQLite", correct: false },
        ]
    },
    {
        question: "Quel événement scientifique ai-je suivi ?",
        answers: [
            { text: "Un hackathon", correct: false },
            { text: "Une formation Arduino", correct: true },
            { text: "Un concours de design", correct: false },
            { text: "Un séminaire en marketing", correct: false },
        ]
    },
    {
        question: "Quelle est ma passion principale en technologie ?",
        answers: [
            { text: "Développement Web", correct: true },
            { text: "Intelligence Artificielle", correct: false },
            { text: "Jeux vidéo", correct: false },
            { text: "Réalité virtuelle", correct: false },
        ]
    },
    {
        question: "Quel projet a amélioré l'ergonomie d'une application Web ?",
        answers: [
            { text: "Projet Arduino", correct: false },
            { text: "Modernisation d'une application Web", correct: true },
            { text: "Création d'un jeu éducatif", correct: false },
            { text: "Développement d'une API", correct: false },
        ]
    },
    {
        question: "Quels outils agiles ai-je utilisés pour la gestion de projet ?",
        answers: [
            { text: "Jira", correct: true },
            { text: "Trello", correct: true },
            { text: "Slack", correct: false },
            { text: "Excel", correct: false },
        ]
    }
];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex, score;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion(currentQuestionIndex);
}

function showQuestion(index) {
    resetState();
    let currentQuestion = questions[index];
    let questionNO = index + 1;
    questionElement.innerHTML = questionNO + ". " + currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(currentQuestionIndex);
    } else {
        showScore();
    }
});

function showScore() {
    resetState();
    questionElement.innerHTML = `Quiz completed! Your score is ${score} out of ${questions.length}.`;
    nextButton.innerHTML = "Restart";
    nextButton.style.display = "block";
    nextButton.addEventListener("click", startQuiz);
}

startQuiz();
