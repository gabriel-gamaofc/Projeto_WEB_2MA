document.addEventListener('DOMContentLoaded', function () {
    var persons = document.querySelectorAll('.person');

    function fadeIn() {
        persons.forEach(function (person, index) {
            var rect = person.getBoundingClientRect();

            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                person.style.opacity = 1;
                person.style.transform = 'translateX(0)';
            } else {
                person.style.opacity = 0;

                // Alternar a direção da transição com base no índice
                if (index % 2 === 0) {
                    person.classList.add('left-to-right');
                    person.classList.remove('right-to-left');
                } else {
                    person.classList.add('right-to-left');
                    person.classList.remove('left-to-right');
                }
            }
        });
    }

    window.addEventListener('scroll', fadeIn);
    window.addEventListener('resize', fadeIn);

    fadeIn();
});