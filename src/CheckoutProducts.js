import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProducts({ id,title,image,price,rating }){
    
    const [{basket},dispatch]=useStateValue();
    const removeFromBasket=()=>{
        //remove from basket  
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id,
        });
    }

    return(
        <div className="checkoutProduct">
            <img className="image" src={image} alt=""/>

            <div className="checkoutProduct_info">
                <p className="title">{title}</p>
                <p className="price">
                    <small>$</small>
                    <strorng>{price}</strorng>    
                </p> 
                <div className="rating">
                    {Array(rating)
                    .fill()
                    .map((_) =>(<p>⭐</p>))}
                </div>
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
};

export default CheckoutProducts;