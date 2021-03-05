import React from 'react'
import {useStateValue} from "./StateProvider"
import './Chekout.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'
function Checkout() {
        const [{basket}] = useStateValue();
    return (
        <div className="chekout">
            <div className="chekout__left">
            <img className="checkout__ad" src="https://scontent-cdg2-1.xx.fbcdn.net/v/t1.15752-0/p280x280/125279511_810714149725291_2649603622051178120_n.png?_nc_cat=108&ccb=2&_nc_sid=ae9488&_nc_ohc=D3WKyvD-FFIAX9gSjDz&_nc_ht=scontent-cdg2-1.xx&oh=e5b3f2da2c740b61889429a4d3710945&oe=5FD6823E"
            alt="" />
            {basket?.length ===0? (
                <div><h2> your shopping basket is empty </h2> </div>
            ):(
                <div>
                    <h2>Your Shopping Basket</h2>
                    {basket.map(item=>(
                        <CheckoutProduct key={item.id} item={item}/>
                    ))

                    }
                </div>
            )
            }
            </div>
            {basket?.length>0&&(
            <div class="chekout__right">
                <Subtotal/>
            </div>)}
        </div>
    )
}

export default Checkout
