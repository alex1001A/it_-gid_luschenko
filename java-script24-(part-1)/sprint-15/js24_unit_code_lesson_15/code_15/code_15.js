// document.getElementById('h3').onclick = helloFn
// document.getElementById('h3').onclick = byeFn

// document.getElementById('h3').onclick = function () {
//     helloFn()
//     byeFn()
// }


function helloFn() {
    console.log(this);
    console.log('hi');
}

function byeFn() {
    console.log(this);
    console.log('bye');    
}

document.getElementById('h3').addEventListener('click', helloFn)
document.getElementById('h3').addEventListener('click', byeFn)
document.getElementById('h3').removeEventListener('click', helloFn)