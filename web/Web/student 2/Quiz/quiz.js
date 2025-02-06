function startQuiz() {
    let score = 0;
    const questions = [
        { question: "What component is known as the 'brain' of the computer?", answer: "CPU" },
        { question: "Which component stores data permanently even when the computer is turned off?", answer: "Hard Drive" },
        { question: "What is the main component responsible for rendering graphics?", answer: "GPU" },
        { question: "Which part of the computer provides power to all other components?", answer: "Power Supply" },
        { question: "What type of memory is used for short-term data storage while the computer is running?", answer: "RAM" }
    ];

    questions.forEach(q => {
        let userAnswer = prompt(q.question);
        if (userAnswer.toLowerCase() === q.answer.toLowerCase()) {
            score += 2;
        } else {
            score -= 1;
        }
    });

    document.getElementById('quizResult').innerText = `You have earned ${score} points. Please claim the points in your next purchase.`;
}
