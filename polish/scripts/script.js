
document.getElementById('start-practice').addEventListener('click', () => {
    const numQuestions = parseInt(document.getElementById('question-number').value);
    const selectedGrammar = Array.from(document.querySelectorAll('#grammar-options input:checked')).map(cb => cb.value);
    const selectedCases = Array.from(document.querySelectorAll('#case-options input:checked')).map(cb => cb.value);

    const filteredSentences = sentences.filter(sentence =>
        selectedGrammar.some(gram => sentence.type.includes(gram)) &&
        selectedCases.includes(sentence.correctCase.toLowerCase())
    );

    if (filteredSentences.length === 0) {
        alert('No sentences found for the selected options.');
        return;
    }

    const selectedSentences = [];
    const usedIndexes = new Set();
    while (selectedSentences.length < numQuestions && selectedSentences.length < filteredSentences.length) {
        const randomIndex = Math.floor(Math.random() * filteredSentences.length);
        if (!usedIndexes.has(randomIndex)) {
            usedIndexes.add(randomIndex);
            selectedSentences.push(filteredSentences[randomIndex]);
        }
    }

    const exerciseForm = document.getElementById('exercise-form');
    exerciseForm.innerHTML = '';
    selectedSentences.forEach((sentence, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.innerHTML = `
            <p>${sentence.sentence} (${sentence.translation}) - <input type="text" data-correct-word="${sentence.correctWord}" data-nominative="${sentence.nominative}" data-translation="${sentence.translation}" class="answer-input"></p>
            <p class="feedback" id="feedback-${index}"></p>
        `;
        exerciseForm.appendChild(questionDiv);
    });

    document.getElementById('exercise-container').style.display = 'block';
});

document.getElementById('submit-answers').addEventListener('click', (e) => {
    e.preventDefault();
    const answers = document.querySelectorAll('.answer-input');
    answers.forEach((input, index) => {
        const userAnswer = input.value.trim();
        const correctWord = input.dataset.correctWord;
        const nominative = input.dataset.nominative;
        const translation = input.dataset.translation;
        const feedback = document.getElementById(`feedback-${index}`);
        if (userAnswer.toLowerCase() === correctWord.toLowerCase()) {
            feedback.innerHTML = `Correct!`;
            feedback.style.color = 'green';
        } else {
            feedback.innerHTML = `Incorrect. Your answer: ${userAnswer}. Correct answer: ${correctWord} (Nominative: ${nominative}). Translation: ${translation}`;
            feedback.style.color = 'red';
        }
    });
});