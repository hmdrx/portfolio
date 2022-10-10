let menu = document.getElementById('toogle-menu');
let hide = document.getElementById('menu-dropdown')
menu.addEventListener('click', ()=>{
    if(menu.innerHTML === '<i class="ri-menu-line"></i>'){
        menu.innerHTML = '<i class="ri-close-line"></i>'
        hide.classList.toggle('menu-show')
    }else{
        menu.innerHTML = '<i class="ri-menu-line"></i>'
        hide.classList.remove('menu-show')
    }

  
})