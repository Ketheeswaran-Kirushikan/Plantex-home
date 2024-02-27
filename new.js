let isNightMode = false;
function toggleNightMode() {
    const sunIcon = document.getElementById('sunIcon');
    const moonIcon = document.getElementById('moonIcon');
    isNightMode = !isNightMode;
    moonIcon.classList.toggle('hidden', isNightMode);
    sunIcon.classList.toggle('hidden', !isNightMode);
    document.body.classList.toggle('night-mode', isNightMode);
}

const images = document.querySelectorAll('#slider img');
let index = 0;
function rotateImages() {
    images[index].classList.remove('active');
    index = (index + 1) % images.length;
    images[index].classList.add('active');
}
setInterval(rotateImages, 5000);

document.addEventListener("DOMContentLoaded", function () {

    const featuredBtn = document.getElementById('featured');
    const bestSellersBtn = document.getElementById('sellers');
    const latestBtn = document.getElementById('latest');
    const productOneSection = document.getElementById('productOne');
    const productTwoSection = document.getElementById('productTwo');
    const productThreeSection = document.getElementById('productThree');

    featuredBtn.addEventListener('click', function () {
        productOneSection.style.display = 'block';
        productTwoSection.style.display = 'none';
        productThreeSection.style.display = 'none';
        featuredBtn.style.backgroundColor = '#0f4c0cd2';
        bestSellersBtn.style.backgroundColor = '';
        latestBtn.style.backgroundColor = '';
    });

    bestSellersBtn.addEventListener('click', function () {
        productOneSection.style.display = 'none';
        productTwoSection.style.display = 'block';
        productThreeSection.style.display = 'none';
        featuredBtn.style.backgroundColor = '';
        bestSellersBtn.style.backgroundColor = '#0f4c0cd2';
        latestBtn.style.backgroundColor = '';
    });

    latestBtn.addEventListener('click', function () {
        productOneSection.style.display = 'none';
        productTwoSection.style.display = 'none';
        productThreeSection.style.display = 'block';

        featuredBtn.style.backgroundColor = '';
        bestSellersBtn.style.backgroundColor = '';
        latestBtn.style.backgroundColor = '#0f4c0cd2';
    });
});

const buttons = document.querySelectorAll('.faq-toggle');
buttons.forEach((button) =>{
    button.addEventListener('click', () =>{
        button.parentNode.classList.toggle('active')
    })
})


document.addEventListener("DOMContentLoaded", function() {
    var circleOne = document.getElementById("circleOne");
    var circleTwo = document.getElementById("circleTwo");
    var circleThree = document.getElementById("circleThree");
    var teamOne = document.getElementById("teamOne");
    var teamTwo = document.getElementById("teamTwo");
    var teamThree = document.getElementById("teamThree");
    showTeamDetail(teamOne);
    circleOne.addEventListener("click", function() {
        showTeamDetail(teamOne);
        updateActivatedClass(circleOne);
    });

    circleTwo.addEventListener("click", function() {
        showTeamDetail(teamTwo);
        updateActivatedClass(circleTwo);
    });

    circleThree.addEventListener("click", function() {
        showTeamDetail(teamThree);
        updateActivatedClass(circleThree);
    });

    function showTeamDetail(teamElement) {
        teamOne.style.display = "none";
        teamTwo.style.display = "none";
        teamThree.style.display = "none";
        teamElement.style.display = "flex";
        teamElement.style.alignItems = "center";
        teamElement.style.justifyContent = "center";
        
    }
    function updateActivatedClass(clickedCircle) {
        circleOne.classList.remove("activated");
        circleTwo.classList.remove("activated");
        circleThree.classList.remove("activated");
        clickedCircle.classList.add("activated");
    }
});

