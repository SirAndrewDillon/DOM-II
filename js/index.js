const header = document.querySelector('.main-navigation');
header.addEventListener('mouseover', function() {
    header.style.backgroundColor = 'dodgerblue'
})

const footeralert = document.querySelector('.footer');
footeralert.addEventListener('click', function(event) {
    alert('Copyright: CSS Cowboy');
    console.log("Can You Hear Me Now")
});

const navContent = document.querySelectorAll('.nav-link');
navContent.forEach(navItem => {
    navItem.addEventListener('click', function() {
        navItem.style.color = 'red';
    })
})

const highlight1 = document.querySelector('.intro');
highlight1.addEventListener('mouseover', function() {
    highlight1.style.backgroundColor = 'hotpink';
})

const highlight2 = document.querySelector('.content-section');
highlight2.addEventListener('mouseover', function() {
    highlight2.style.backgroundColor = 'hotpink';
})

const highlight3 = document.querySelector('.inverse-content');
highlight3.addEventListener('mouseover', function() {
    highlight3.style.backgroundColor = 'hotpink';
})

const highlight4 = document.querySelector('.content-destination');
highlight4.addEventListener('mouseover', function() {
    highlight4.style.backgroundColor = 'hotpink';
})

const buttons = document.getElementsByClassName('.destination .btn');
buttons.addEventListener('click', function() {
    contactbox.style.visibility = 'visible'
})

// const images = document.querySelectorAll('img');
// images.addEventListener('mouseover', function () {
//   images.style.border = '5px solid yellow';
// })
// console.log(images)