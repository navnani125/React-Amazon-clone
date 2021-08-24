import React from "react";
import BrandLogo from "./assets/amazon_logo.png";
import './Header.css';
import { Link } from "react-router-dom";
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import MenuIcon from '@material-ui/icons/Menu';
import NavImage from './assets/nav-image.jpg';
import { useStateValue } from './StateProvider';
 
function Header(){
    const [{ basket }] = useStateValue();
    console.log(basket);

    return(
        <div>
            <nav className="header">
                <Link to="/">
                    <img className="header_logo" src={BrandLogo}  alt="" />
                </Link>  

                <div className="deliver header_link">
                    <LocationOnOutlinedIcon fontSize="medium" className="deliver_icon"/>
                    <div className="deliver_text header_option">
                        <span className="Line1">Deliver to</span>
                        <span className="Line2">India</span>
                    </div>
                </div>  

                <div className="header_search">
                    <input type="text" className="SearchBox" />
                    <SearchIcon className="SearchIcon" />
                </div>

                <div className="header_nav">
                    <Link to="/login" className="header_link">
                        <div className="header_option">
                            <span className="Line1">Hello Naveen</span>
                            <span className="Line2">Sign In</span>
                        </div>
                    </Link>
                    <Link className="header_link">
                        <div className="header_option">
                            <span className="Line1">Returns</span>
                            <span className="Line2">& Orders</span>
                        </div>
                    </Link>
                    <Link className="header_link">
                        <div className="header_option">
                            <span className="Line1">Your</span>
                            <span className="Line2">Prime</span>
                        </div>
                    </Link>
                </div>
                
                <Link to="/checkout" className="header_link">
                    <div className="headerCart">
                        <ShoppingBasket />
                        <span className="cartCount">{basket?.length}</span>
                    </div>
                </Link>
            </nav>
            <nav className="second_navbar">
                <div className="second_navLinks">
                    <Link to="/" className="MenuIcon header_link">
                        <MenuIcon />
                        <span>All</span>
                    </Link>
                    <Link to="/" className="header_link">
                        Best Sellers
                    </Link>
                    <Link to="/" className="header_link">
                        Mobiles
                    </Link>
                    <Link to="/" className="header_link">
                        Amazon Pay
                    </Link>
                    <Link to="/" className="header_link">
                        Fashion
                    </Link>
                    <Link to="/" className="header_link">
                        Electronics
                    </Link>
                    <Link to="/" className="header_link">
                        Pantry
                    </Link>
                    <Link to="/" className="header_link">
                        Prime
                    </Link>
                    <Link to="/" className="header_link">
                        Customer Service
                    </Link>
                </div>
                <div>
                    <Link>
                    <img src={NavImage} alt="" />
                    </Link>
                </div>
            </nav>
        </div>
        
        
    )
}

export default Header;