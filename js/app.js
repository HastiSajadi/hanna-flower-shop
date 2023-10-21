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


// deal countDown

let countDate = new Date('october 30 , 2023 02:00:00').getTime();

function countDown(){

    let now =new Date().getTime();
    gap = countDate - now;
    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let d = Math.floor(gap / (day));
    let h = Math.floor((gap) % (day) / (hour));
    let m = Math.floor((gap) % (hour) / (minute));
    let s = Math.floor((gap) % (minute) / (second));
    
    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;
}

setInterval(function(){
    countDown()
},1000);