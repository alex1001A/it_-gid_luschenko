const item = document.querySelector('.one')
console.log(item.classList.contains('block'));

// item.classList.add('bg-orange')
item.classList.add('green')

// remove classes
// item.classList.remove('bg-orange')
item.classList.remove('green')

// replace classes
// item.classList.replace('bg-orange', 'cd')

function t() {
    item.classList.toggle('bg-orange')
}
item.onclick = t

const itemNav = document.querySelector('.item-nav')
console.log(itemNav);
itemNav.onclick = showNav

function showNav() {
    const subNav = itemNav.querySelector('.sub-nav')
    console.log(subNav);
    
    subNav.classList.toggle('hide')
}
