const cards = document.querySelectorAll('.card');
        const anchors = document.querySelectorAll('.testimonials-primary');

        for (let i = 0; i < cards.length; i++) {
            cards[i].addEventListener('mouseenter', function () {
                anchors[i].style.color = '#2D6FD2';
                cards[i].querySelector('.card-img-top').style.transform = 'scale(1.1)';
            });

            cards[i].addEventListener('mouseleave', function () {
                anchors[i].style.color = '#667085';
                cards[i].querySelector('.card-img-top').style.transform = 'scale(1)';
            });
        }