//Movement Animation
const card = document.querySelector(".card");
const container = document.querySelector(".container");

// Animate Items
const title = document.querySelector('.title');
const game = document.querySelector('.game');
const back = document.querySelector('.back');
const description = document.querySelector('.info h3');
const rating = document.querySelector('.rating');
const h4 = document.querySelector('h4');
const h5 = document.querySelector('h5');
const h6 = document.querySelector('h6');

// Movement Animation Event
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX)/ 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Animate In
container.addEventListener('mouseenter', (e) => {
    card.style.transition = 'none';
    //Popout
    title.style.transform = "translateZ(150px)";
    game.style.transform = "translateZ(200px) rotateZ(360deg)";
    back.style.transform = "translateZ(150px)";
    description.style.transform = "translateZ(150px)";
    rating.style.transform = "translateZ(150px)";
    h4.style.transform = "translateZ(150px)";
    h5.style.transform = "translateZ(150px)";
    h6.style.transform = "translateZ(150px)";
})

//Animate Out
container.addEventListener('mouseleave', (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popout
    title.style.transform = "translateX(0px)";
    game.style.transform = "translateZ(0px) rotateZ(-360deg)";
    back.style.transform = "translateZ(0px)";
    description.style.transform = "translateZ(0px)";
    rating.style.transform = "translateZ(0px)";
    h4.style.transform = "translateZ(0px)";
    h5.style.transform = "translateZ(0px)";
    h6.style.transform = "translateZ(0px)";
})