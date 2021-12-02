const icon = document.querySelector('.todo');

icon.addEventListener('mouseover', checkMarkHover());




function checkMarkHover() {
    console.log('hover');
    icon.innerHTML = '<i class="material-icons-round">add_circle</i>';
}