import React, { useState  } from 'react';
import '@styles/header.scss';
import Menu from '@components/Menu';

import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';

function Header() {

    const [toggle, setToggle] = useState (false);

    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (
        <nav>
            <img src={menu} alt="menu" className="menu" />

            <div className="navbar-left">
                <img src={logo} alt="logo" className="nav-logo" />

                <ul>
                    <li>
                        <a href="/">All</a>
                    </li>
                    <li>
                        <a href="/">Clothes</a>
                    </li>
                    <li>
                        <a href="/">Electronics</a>
                    </li>
                    <li>
                        <a href="/">Furnitures</a>
                    </li>
                    <li>
                        <a href="/">Toys</a>
                    </li>
                    <li>
                        <a href="/">Others</a>
                    </li>
                </ul>
            </div>

            <div className="navbar-right">
                <ul>
                    <li className="navbar-email" onClick=   {handleToggle}>harby-96@hotmail.com</li>
                    <li className="navbar-shopping-cart">
                        <img src={shoppingCart} alt="shopping cart" />
                        <div>2</div>
                    </li>
                </ul>
            </div>
            {toggle && <Menu />}            
        </nav>
    )
}

export default Header
