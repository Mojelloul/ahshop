import React from 'react'
import './ChekoutProduct.css';
import { useStateValue } from './StateProvider';
function CheckoutProduct({item}) {
    const [{basket}, dispatch] = useStateValue();
    const remouve=() => {
        dispatch({
            type:"REMOUVEFROMBASKET",
            id:item.id
        }
        )
    }
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={item.image} alt="" />
            <div className="chekoutproduct__info">
                <p className="chekoutproduct__title">{item.title}</p>
                <div className="chekoutproduct__price">
                    <small>eu</small>
                    <strong>{item.price}</strong>
                </div>
                <div className="chekoutproduct__rating">
                    {
                        Array(item.rating).fill().map((_)=>(
                            <p>⭐</p>
                        ))
                    }
                </div>
                <button onClick={remouve}>Remouve From basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
