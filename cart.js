var cartItem=document.querySelector("#cart-container")
let total= document.querySelector("#total");
let empty=document.querySelector('#empty');



let cartDataItems=[{
    id:"1",
    product:"Water purification service",
    price:200
},{
    id:"2",
    product:"Water purification service",
    price:300
}];

let basket=JSON.parse(localStorage.getItem("data")) || [] ;

let generateCart= () =>{
    return (cartItem.innerHTML=cartDataItems.map((x)=>{
        
        let {id,product,price}=x;
        let search=basket.find((x)=>x.id===id) || [];
        return `
                <table width="100%" class="table" id=product-id-${id}>
                
                <tbody>
                    <tr>
                        <td><a href=""><i class="remove fa-solid fa-trash"></i></a></td>
                        <td>
                            <h5>${product}</h5>
                        </td>
                        <td>
                            <h5>₹${ price}</h5>
                        </td>
                         
                            <td class="inc-dec-sign">
                                <i onclick="decrement(${id})" class="fa-solid fa-minus"></i>
                                <div id=${id} class="quantity"><h5>${search.item===undefined?0:search.item}</h5></div>
                                <i onclick="increment(${id})" class="fa-solid fa-plus"></i>
                            </td>
                        
                        <td id=${id} class=sumTotal>
                            <div id=totalID></div>
                        </td>
                    </tr>
                    
                </tbody>
            </table>
    `;
    }).join(""));
};
generateCart();

let priceContainer=(id)=>{
    console.log(price);
}
let increment=(id)=>{  
    let selectedItem=id; 
    let search=basket.find((x)=>x.id ===selectedItem);
    if(search===undefined){
        basket.push({
            id:selectedItem,
            item:1
        });
    }else{
        search.item+=1
    }
    // console.log(basket);
    update(selectedItem);
    // sumtotal(selectedItem);

    localStorage.setItem("data",JSON.stringify(basket));
};
let decrement=(id)=>{
    let selectedItem=id; 
    let search=basket.find((x)=>x.id ===selectedItem);

    if(search.item === undefined){
        return;
    }
    else if(search.item===0){
        return;
    }else(
        search.item-=1
    )
    update(selectedItem);
    
    basket=basket.filter((x)=> x.item !== 0);
    // console.log(basket);
    
    localStorage.setItem("data",JSON.stringify(basket));
    
};
let update=(id)=>{
    let search =basket.find((x)=>x.id===id)
    console.log(search.item);
    document.getElementById(id).innerHTML=search.item ;
    calculate();
};


let calculate=()=>{
   let cartTotal=document.getElementsByClassName('cart');
   cartTotal.innerHTML= basket.map((x)=> x.item).reduce((x,y)=> x+y, 0);   
};

calculate();

// let sumtotal=(id)=>{
//     let search=basket.find((x)=>x.id===id);
//     let price=[];
//     let P= cartDataItems.map(function(x) {
//         let p= x.price * search.item;
//         console.log(p);        
//     });    
    
//     document.getElementById('totalID').innerHTML=price.map((x)=>x[0]);
// };
  let totalAmount = (id) =>{
    if(basket.length !==0){
        let amount = basket.map((x)=>{
            let {id,item}=x;
            let search=basket.find((x)=>x.id===id) || []; 
            console.log(search);  
            console.log(item * search.price) ;
        });
        console.log(amount);
    }
    
    else return;
  }
  totalAmount();



// `
//                 <table width="100%" class="table">
//                 <thead class="thead">
//                     <tr>
//                         <td class="td">Remove</td>
//                         <td>Product</td>
//                         <td>Price</td>
//                         <td>Quantity</td>
//                         <td>Total</td>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td><a href=""><i class="remove fa-solid fa-trash"></i></a></td>
//                         <td>
//                             <h5>Water purification service</h5>
//                         </td>
//                         <td>
//                             <h5>₹300</h5>
//                         </td>
//                         <td><input type="number" class="w-25 pl-1" value="1"></td>
//                         <td>
//                             <h5>₹300</h5>
//                         </td>
//                     </tr>
                    
//                 </tbody>
//             </table>
//     `