import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import { useEffect, useState } from "react";
import { getRealTimeAds } from "../../config/firebase";
import "./new.css";
import { Link } from "react-router-dom";
function Newcars() {
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
      <div className="newcars-text">
        <h1>Find New Cars in Pakistan</h1>
        <p>Find information about the latest cars in the market</p>
      </div>
      <div className="all-usedcar-ads">
        {adds.map((add) =>
          add.km == "0" ? (
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
      <Footer />
    </div>
  );
}
export default Newcars;
