import React from 'react'
import './Header.css'
import {Link} from "react-router-dom"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';

function Header() {
    const [{basket}, dispatch] = useStateValue();
    console.log(basket)
    return (
        <div className="header">
            <Link to="">
                <img className="header__logo" src="https://logomakr.com/media/upload/5z/5z4dDs.png"/>
            </Link>
            <div className="header__search">
            <input type="text" className="header__searchInput"/>
                <SearchIcon className="header__searchIcon"/>
            </div>
            <div className="header__nav">
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">hello</span>
                        <span className="header__optionlineTwo">sign in</span>
                    </div>
                </Link>
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Retourn</span>
                        <span className="header__optionlineTwo">Orders</span>
                    </div>
                </Link>
            </div>
            <Link className="header__link" to="/checkout">
                <div className="header__optionBasket">
                    <ShoppingBasketIcon/>
                    <span className="header__optionlineTwo header_basketcount">
                        {basket?.length}
                    </span>
                </div>
            </Link>
        </div>
    )
}

export default Header
