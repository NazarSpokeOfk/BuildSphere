const slider = () => {
    // Слайдер hi-tech домов
    const nextArrow = document.querySelector('.next__arrow');
    const prevArrow = document.querySelector('.prev__arrow');
    const slides = document.querySelectorAll('.box__inner');
    let hiTechSlideIndex = 1;

    const showHiTechSlides = (n) => {
        if (n > slides.length) {
            hiTechSlideIndex = 1;
        }
        if (n < 1) {
            hiTechSlideIndex = slides.length;
        }
        slides.forEach(item => item.style.display = 'none');
        slides[hiTechSlideIndex - 1].style.display = 'block';
    };

    const manageHiTechSlides = (n) => {
        showHiTechSlides(hiTechSlideIndex += n);
    };

    nextArrow.addEventListener('click', () => {
        manageHiTechSlides(1);
    });

    prevArrow.addEventListener('click', () => {
        manageHiTechSlides(-1);
    });

    showHiTechSlides(hiTechSlideIndex);

    // Слайдер особняков
    const mansNextArrow = document.querySelector('.mans__next__arrow');
    const mansPrevArrow = document.querySelector('.mans__prev__arrow');
    const mansSlides = document.querySelectorAll('.box__inner__mansion');
    let mansionSlideIndex = 1;

    const showMansionSlides = (n) => {
        if (n > mansSlides.length) {
            mansionSlideIndex = 1;
        }
        if (n < 1) {
            mansionSlideIndex = mansSlides.length;
        }
        mansSlides.forEach(item => item.style.display = 'none');
        mansSlides[mansionSlideIndex - 1].style.display = 'block';
    };

    const manageMansionSlides = (n) => {
        showMansionSlides(mansionSlideIndex += n);
    };

    mansNextArrow.addEventListener('click', () => {
        manageMansionSlides(1);
    });

    mansPrevArrow.addEventListener('click', () => {
        manageMansionSlides(-1);
    });

    showMansionSlides(mansionSlideIndex);
};

slider();
