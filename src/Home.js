import React from "react";
import './Home.css';
import BannerImage from './assets/banner2.jpg';
import Product from './Product';
import Oneplus9 from './assets/oneplus_9.jpg';
import S21 from './assets/s21.jpg';
import Macbook1 from './assets/macbook1.webp'; 
import Macbook2 from './assets/macbook2.webp';
import Macbook3 from './assets/macbook3.webp'; 
import Ipad1 from './assets/ipad1.webp'; 
import Ipad2 from './assets/Ipad2.webp';
import Samsungtv from './assets/SamsungTv.jpg';


function Home(){
    return(
        <div className="home">
            <img className="home_image" src={BannerImage} alt=""/>

            <p className="Notify1">You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery. <a href="/">Click here to go to amazon.in</a></p>

            {/*preduct details*/}
            <div className="home_row">
                <Product 
                    id="12345"
                    title="Samsung Galaxy S21 5G | US Version 5G Smartphone | Pro-Grade Camera, 8K Video, 64MP High Res | 128GB, Phantom Violet"
                    price={649.46}
                    rating={5}
                    image={S21}
                />
                <Product 
                    id="12345"
                    title="Oneplus 9  -  An Amazing mobile"
                    price={11.95}
                    rating={5}
                    image={Oneplus9}
                />
            </div>
            <div className="home_row">
                <Product 
                    id="12345"
                    title="2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage"
                    price={2669.95}
                    rating={5}
                    image={Macbook1}
                />
                <Product 
                    id="12345"
                    title="2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray"
                    price={2211.95}
                    rating={5}
                    image={Macbook3}
                />
                <Product 
                    id="12345"
                    title="Apple MacBook Air 13.3' with Retina Display 1.1GHz Quad-Core Intel Core i5, 8GB Memory, 256GB SSD, Gold"
                    price={2911.95}
                    rating={5}
                    image={Macbook2}
                />
            </div>
            <div className="home_row_1">
                <Product className="Tv"
                    id="12345"
                    title="SAMSUNG 82-inch Class QLED Q60T Series - 4K UHD Dual LED Quantum HDR Smart TV with Alexa Built-in"
                    price={7311.46}
                    rating={5}
                    image={Samsungtv}
                />
            </div>
            <div className="home_row">
                <Product 
                    id="12345"
                    title="Apple iPad Pro (12.9-inch, Wi-Fi, 64GB) - Rose Pink (3rd Generation)"
                    price={1311.95}
                    rating={5}
                    image={Ipad1}
                />
                <Product 
                    id="12345"
                    title="SAMSUNG Galaxy Tab S6 Lite 10.4-inch Android Tablet 128GB Wi-Fi S Pen, Gray
                    4.7 out of 5 stars"
                    price={311.24}
                    rating={5}
                    image={Ipad2}
                />
            </div>
            <div className="home_row">
                <Product 
                    id="12345"
                    title="2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage"
                    price={2669.95}
                    rating={5}
                    image={Macbook1}
                />
                <Product 
                    id="12345"
                    title="2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray"
                    price={2211.95}
                    rating={5}
                    image={Macbook3}
                />
                <Product 
                    id="12345"
                    title="Apple MacBook Air 13.3' with Retina Display 1.1GHz Quad-Core Intel Core i5, 8GB Memory, 256GB SSD, Gold"
                    price={2911.95}
                    rating={5}
                    image={Macbook2}
                />
            </div>
        </div>
    );
}

export default Home;