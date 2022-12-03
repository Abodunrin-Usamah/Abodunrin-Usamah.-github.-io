let hamburger= document.querySelector('.hamburger');  
let navSub = document.querySelector('.nav-sub');  
 hamburger.addEventListener('mousemove',function toggle () {  
  hamburger.classList.toggle('change');  
  navSub.classList.toggle('nav-sub');  
 })