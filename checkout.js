let basket=JSON.parse(localStorage.getItem("data")) || [];

console.log(basket);

let calculate=()=>{
   let cartTotal=document.getElementsByClassName('cart');
   cartTotal.innerHTML= basket.map((x)=> x.item).reduce((x,y)=> x+y, 0);
   
};

calculate();