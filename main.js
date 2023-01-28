const icon = document.querySelector('.fa-solid');
const container = document.querySelector('.leftContainer')


icon.addEventListener('click', () => {
    container.classList.toggle('active')
    if(icon.classList.contains('fa-ellipsis')){
        icon.classList.replace('fa-ellipsis','fa-xmark')
    }else{
        icon.classList.replace('fa-xmark','fa-ellipsis')
    }
})