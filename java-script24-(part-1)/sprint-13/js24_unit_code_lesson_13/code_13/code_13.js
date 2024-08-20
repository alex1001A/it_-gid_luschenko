function t01() {
    console.log(1);
    console.log('work');
    
}

document.querySelector('.b-1').onclick = t01

function isEven(n) {
    return n % 2 === 0
}

if (isEven(9)) {
    console.log('even');
    
} else {
    console.log('odd');

}
