function bg(){
    var navbar = document.getElementById('main-hadder');
    var scrollvalue = window.scrollY;
    console.log(scrollvalue);
    if(scrollvalue < 790 ){
        navbar.classList.remove('bgColor');  
    }else{
        navbar.classList.add('bgColor');
    }
}
window.addEventListener('scroll',bg);