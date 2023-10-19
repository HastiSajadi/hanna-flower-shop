let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");
let header = document.querySelector('.header-2');

menu.addEventListener('click' , ()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

window.onscroll = ()=>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if(window.scrollY > 150){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    };
};




function like(x) {
    x.classList.toggle("fa-solid");
  }



//   function addCart(x){
//     if(x.innerHTML === "افزودن به سبد خرید"){
//         x.innerHTML = "حذف از سبد خرید"
//         document.querySelector('.fa-bookmark').classList.toggle('fa-solid')
//     }else{
//         x.innerHTML = "افزودن به سبد خرید"
//         document.querySelector('.fa-bookmark').classList.remove('fa-solid')
//     }
//   }


