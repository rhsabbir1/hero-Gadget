//  Local Storage 

import { json } from "react-router-dom"

const addToCart = id=>{
    // 1. creat an object 
   let shoppingCart = {}
// 2. get previous item 
    const storeCart = localStorage.getItem('shoping-cart')
    if(storeCart){
        shoppingCart = JSON.parse(storeCart)
    }

    // add quantity 
    const quantity = shoppingCart[id]
    if(quantity){
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity
    }
    else{
        shoppingCart[id] = 1;
    }

    localStorage.setItem('shoping-cart' ,JSON.stringify(shoppingCart))
}

export {addToCart}