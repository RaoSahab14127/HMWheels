import "./detail.css";
import {ethers} from "ethers";
import { useNavigate } from "react-router-dom";
import {useContext } from "react";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import { useLocation } from "react-router-dom";
import UserContext from "../../../context/userContext";
function Detail() {
  const navigate = useNavigate();
  const location = useLocation();
  const { setSign, sign } = useContext(UserContext);
  const cABI = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_aa",
          "type": "address"
        }
      ],
      "name": "pay",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    }
  ]
  const Cadd = "0x1B5F8973631b464e17ba957f5285d1E4303B1aEd";

  const pay = async()=>{
    const dep = new ethers.Contract(Cadd, cABI, sign);
    let contratdep = await dep;
    const domain_apply1 = await contratdep.pay(location.state.add.address, {
      value: ethers.utils.parseEther(location.state.add.price),
    });
    alert("Payment Succesfully paid")
    navigate("/");
    

  }
  return (
    <div>
      <Header />
      <div className="main-detail">
        <div className="main-detail-child">
          <div className="left-detail">
            <img className="detail-img" src={location.state.add.imageUrl} />
            <div className="det-carinfo-price">
              <div>
                <h3>CarInfo</h3>
                <h3 className="detail-txt">{location.state.add.carinfo}</h3>
              </div>
              <div>
                <h3>Price</h3>
                <h3 className="detail-txt">{location.state.add.price}</h3>
              </div>
              <div>
                <h3>KM</h3>
                <h3 className="detail-txt">{location.state.add.km}</h3>
              </div>
            </div>
            <div className="det-city-color">
              <div>
                <h3>City</h3>
                <h3 className="detail-txt">{location.state.add.city}</h3>
              </div>
              <div>
                <h3>Color</h3>
                <h3 className="detail-txt">{location.state.add.color}</h3>
              </div>
            </div>
            <h3>Description</h3>
            <h3 className="detail-txt">{location.state.add.description}</h3>
          </div>
          <div className="right-detail">
            <h3>Primary Number</h3>
            <h3 className="detail-txt">{location.state.add.no}</h3>
            <h3>Secondary number</h3>
            <h3 className="detail-txt">{location.state.add.secno}</h3>
            <h3>Wallet Address</h3>
            <h3 className="detail-txt">{location.state.add.address}</h3>
            <button className="chat-btn" onClick={pay}>Pay</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Detail;
