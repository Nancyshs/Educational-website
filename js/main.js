
window.addEventListener('scroll', function() {
    const bannerHeight = document.querySelector('.banner_body').offsetHeight; 
    const logoNavBtn = document.querySelector('.logo_nav_btn'); 

    if (window.scrollY >= bannerHeight) {
        logoNavBtn.classList.add('fixed');
    } else {
        logoNavBtn.classList.remove('fixed'); 
    }

    
    showOnScroll('.Our_Programs');
    showOnScroll('.Our_Teachers');

   
    const programs = document.querySelectorAll('.program1, .program2, .program3');
    programs.forEach((program, index) => {
        showWithDelay(program, index * 300);
    });

    
    const teachers = document.querySelectorAll('.three_teachers');
    teachers.forEach((teacher, index) => {
        showWithDelay(teacher, index * 300);
    });
});


function showOnScroll(selector) {
    const element = document.querySelector(selector);
    const position = element.getBoundingClientRect().top;

    if (position < window.innerHeight - 100) {
        element.classList.add('visible');
    }
}


function showWithDelay(element, delay) {
    const position = element.getBoundingClientRect().top;

    if (position < window.innerHeight - 100) {
        setTimeout(() => {
            element.classList.add('visible');
        }, delay);
    }
}


document.addEventListener("DOMContentLoaded", function() {
    const banner = document.querySelector('.banner_body');
    const bannerTitle = document.querySelector('.banner_title');
    const bannerParagraph = document.querySelector('.banner_left p');
    const bannerButton = document.querySelector('.banner_left_btn');

    setTimeout(() => { banner.classList.add('visible'); }, 300);
    setTimeout(() => { bannerTitle.classList.add('visible'); }, 600);
    setTimeout(() => { bannerParagraph.classList.add('visible'); }, 900);
    setTimeout(() => { bannerButton.classList.add('visible'); }, 1200);
});
