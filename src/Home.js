import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB."
        alt=""
      />

      {/* Product id, title, price, rating, image */}
      <div className="home_row">
        <Product
          id="1"
          title="Logitech C920e / C920 HD Webcam, Full HD 1080p Video Calling and Recording, Dual Stereo Audio, Stream Gaming - Black"
          price={118.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71ht3xBCvLL._AC_SL1356_.jpg"
        />
        <Product
          id="2"
          title="Echo Plus (2nd Gen) - Premium sound with built-in smart home hub - Heather Gray"
          price={74.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71uB9tuw2JL._AC_SL1000_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="3"
          title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Space Gray (4th Generation)"
          price={1049.95}
          rating={5}
          image="https://m.media-amazon.com/images/I/81SGb5l+lZL._AC_SX480_SY360_.jpg"
        />
        <Product
          id="4"
          title="Fire TV Stick streaming media player with Alexa built in, includes Alexa Voice Remote, HD, easy set-up, released 2019"
          price={29.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51ZdmnHKukL._AC_SL1000_.jpg"
        />
        <Product
          id="5"
          title="Apple AirPods Pro"
          price={219.98}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71zny7BTRlL._AC_SL1500_.jpg"
        />
      </div>
      <div className="home_row_bottom">
        <Product
          id="6"
          title="SAMSUNG 75-inch Class Crystal UHD TU-8000 Series - 4K UHD HDR Smart TV with Alexa Built-in (UN75TU8000FXZA, 2020 Model)"
          price={1097.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71RiQZ0J2SL._AC_SL1000_.jpg"
        />
      </div>
      {/* Products */}
    </div>
  );
}

export default Home;
