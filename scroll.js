const bg = document.getElementById('bg');
const [red, green, blue] = [255,255, 255];
const [red1, green2, blue3] = [100,100, 100];
window.addEventListener('scroll', () => {
    let y = 1 + (window.scrollY || window.pageYOffset) / 150;
    const [r, g, b] = [red / y, green / y, blue / y].map(Math.round);
    const [r1, g1, b1] = [red1 * y, green2 * y, blue3 * y].map(Math.round);
    bg.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    bg.style.color = `rgb(${r1}, ${g1}, ${b1})`;
    console.log(y);
    if(y <=10){
        // nav.innerHTML('asdfjl');
    }
})
const nav = document.querySelector('nav');
