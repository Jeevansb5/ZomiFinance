let navbar=document.querySelector('.nav'),
    burger=document.querySelector('.burger'),
    content=document.querySelector('.content'),
    option=document.querySelector('.option');

    burger.addEventListener('click',()=>{
        content.classList.toggle('v-class')
        option.classList.toggle('v-class')
        navbar.classList.toggle('h-nav')

    })