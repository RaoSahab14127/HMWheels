import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import leftfblogo from "../../images/left fb logo.png";
import leftinstalogo from "../../images/left insta logo.png";
import lefttwiterlogo from "../../images/left twiter logo.png";
import leftmsglogo from "../../images/left msg logo.png";
import "./home.css";
import { useEffect, useState } from "react";
import { getRealTimeAds } from "../../config/firebase";
import { Link } from "react-router-dom";
function Home() {
  const [adds, setAds] = useState([]);
  function getAds() {
    getRealTimeAds((ads) => {
      setAds(ads);
    });
  }
  useEffect(() => {
    getAds();
  }, []);
  return (
    <div>
      <Header />
      <div className="usedcars-top-text">
        <h1>Find used cars in Pakistan</h1>
        <p>With thousand of cars,we have just the right one for you</p>
      </div>
      <div className="all-usedcar-ads">
        {adds.map((add) =>
          add.km != "0" ? (
            <Link to="/detail" state={{ add }}>
              <div className="card">
                <img className="card-img" src={add.imageUrl} />
                <div className="card-text">
                  <h3 className="card-carinfo">{add.carinfo}</h3>
                  <h4 className="card-price">ETH {add.price}</h4>
                  <h5 className="card-city">{add.city}</h5>
                </div>
              </div>
            </Link>
          ) : null
        )}
      </div>
      <div className="fixed-leftside-logos">
        <img className="left-side-logos" src={leftfblogo} alt="" />
        <img className="left-side-logos" src={leftinstalogo} alt="" />
        <img className="left-side-logos" src={lefttwiterlogo} alt="" />
        <img className="left-side-logos" src={leftmsglogo} alt="" />
      </div>
      <Footer />
    </div>
  );
}
export default Home;
