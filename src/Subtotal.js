import React from 'react'
import './Subtotal.css'
import CurrencyFormat from "react-currency-format";
import {useStateValue} from "./StateProvider"
import {getBasketTotal} from './reducer'

function Subtotal() {
    const [{basket},dispatch] = useStateValue();
    return (
        <div className="subtotal">
                        <p>
                Subtotal ({basket.length} items): <strong>{getBasketTotal(basket)}eu</strong>
                        </p>
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
