const faqQuestions = document.querySelectorAll('.faq-question');

        faqQuestions.forEach((question) => {
            question.addEventListener('click', () => {
                const answer = question.nextElementSibling;
                faqQuestions.forEach((item) => {
                    if (item !== question) {
                        item.nextElementSibling.style.display = 'none';
                        item.querySelector('i').classList.remove('bi-dash-circle');
                        item.querySelector('i').classList.add('bi-plus-circle');
                    }
                });
                if (answer.style.display === 'block') {
                    answer.style.display = 'none';
                    question.querySelector('i').classList.remove('bi-dash-circle');
                    question.querySelector('i').classList.add('bi-plus-circle');
                } else {
                    answer.style.display = 'block';
                    question.querySelector('i').classList.remove('bi-plus-circle');
                    question.querySelector('i').classList.add('bi-dash-circle');
                }
            });
        });