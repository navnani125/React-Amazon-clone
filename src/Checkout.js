import React from "react";
import { useStateValue } from "./StateProvider";
import OfferImage from './assets/offer3.jpg';
import './Checkout.css';  
import CheckoutProducts from "./CheckoutProducts";
import Subtotal from './Subtotal';

function Checkout(){  
    const [{ basket }]=useStateValue();

    return(
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad" src={OfferImage} alt=""/>
                {basket?.length === 0?(
                    <div>
                        <h2>Your Shopping Basket is Empty</h2>
                        <p className="checkout_title">You have no items in your basket. To buy one or more items, click "Add to Basket" next to the item</p>
                    </div>
                ) : (
                    <div>
                        <h2 className="checkout_title">Your Shopping Basket</h2>
                        {basket.map(item=>(
                            <CheckoutProducts 
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                )}  
            </div>
            {basket.length>0&&(
                <div className="checkout_right">    
                    <Subtotal />
                </div>
            )}
        </div>
            
    );
}

export default Checkout;