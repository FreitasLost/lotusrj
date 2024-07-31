document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('whitelist-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const question1 = document.getElementById('question1').value;
        const question2 = document.getElementById('question2').value;

        let isValid = true;

        // Respostas corretas
        const correctAnswers = {
            question1: 'Paris',
            question2: 'H2O'
        };

        // Feedbacks
        const feedback1 = document.getElementById('question1-feedback');
        const feedback2 = document.getElementById('question2-feedback');

        if (question1 === correctAnswers.question1) {
            feedback1.textContent = 'Correto!';
            feedback1.className = 'feedback correct';
        } else {
            feedback1.textContent = 'Incorreto! A resposta correta é Paris.';
            feedback1.className = 'feedback incorrect';
            isValid = false;
        }

        if (question2 === correctAnswers.question2) {
            feedback2.textContent = 'Correto!';
            feedback2.className = 'feedback correct';
        } else {
            feedback2.textContent = 'Incorreto! A resposta correta é H2O.';
            feedback2.className = 'feedback incorrect';
            isValid = false;
        }

        if (isValid) {
            form.submit(); // Se todas as respostas estiverem corretas, envia o formulário
        }
    });
});
