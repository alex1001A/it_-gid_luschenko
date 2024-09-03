document.querySelector('.one').onclick = function (e) {
    console.log(e);
    console.log('click');
}

document.querySelector('.two').onclick = function () {
    console.log('click2');
}

document.querySelector('.two').ondblclick = () => {
    console.log('click2');
}

document.querySelector('.two').oncontextmenu = () => {
    console.log('contextMenu');
    return false
}

// let w = 100
// document.querySelector('.three').onmousemove = function() {
//     this.style.width = w + 'px'
//     w++
// }

document.querySelector('.three').onmouseenter = () => {
    document.querySelector('.three').style.background = 'red'
}

document.querySelector('.three').onmouseleave = () => {
    document.querySelector('.three').style.background = 'green'
}

document.querySelector('.three').onmousedown = () => {
    document.querySelector('.three').style.background = 'orange'
}

document.querySelector('.three').onmouseup = () => {
    document.querySelector('.three').style.background = 'blue'
}

let p = 10
document.querySelector('button').onclick = (e) => {
    p++
    document.querySelector('progress').value = p
}