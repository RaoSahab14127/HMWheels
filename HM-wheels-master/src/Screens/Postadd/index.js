import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postAdToDb, uploadImage, getRealTimeAds } from "../../config/firebase";
import "./postadd.css";
function Postadd() {
  const [city, setCity] = useState("");
  const [carinfo, setCarinfo] = useState("");
  const [color, setColor] = useState("");
  const [km, setKm] = useState("");
  const [price, setPrice] = useState("");
  const [des, setDes] = useState("");
  const [image, setImage] = useState("");
  const [no, setNo] = useState("");
  const [secno, setSecno] = useState("");
  const [address, setAddress] = useState("");

  const upload = (e) => {
    if (e.target.value) {
      setImage(e.target.files[0]);
    }
  };
  const navigate = useNavigate();
  async function postadd() {
    try {
      const imageUrl = await uploadImage(image);
      await postAdToDb(
        city,
        carinfo,
        color,
        km,
        price,
        des,
        imageUrl,
        no,
        secno,
        address
      );

      navigate("/");
    } catch (e) {
      console.log(e);
      alert("please fill the all required fields");
    }
  }

  return (
    <div className="main-postadd">
      <div className="postadd-allfields">
        <h1 className="postadd-form-heading">Car Information</h1>
        <div className="postadd-text-fields">
          <h3>City:</h3>
          <input
            onChange={(e) => setCity(e.target.value)}
            className="postadd-fields"
            type="text"
            placeholder="City"
            required
          />
        </div>
        <div className="postadd-text-fields">
          <h3>Car Info:</h3>
          <input
            onChange={(e) => setCarinfo(e.target.value)}
            className="postadd-fields"
            type="text"
            placeholder="Make/Model/version"
            required
          />
        </div>
        <div className="postadd-text-fields">
          <h3>Exterior Color:</h3>
          <input
            onChange={(e) => setColor(e.target.value)}
            className="postadd-fields"
            type="text"
            placeholder="Exterior color"
            required
          />
        </div>
        <div className="postadd-text-fields">
          <h3>Mileage(km):</h3>
          <input
            onChange={(e) => setKm(e.target.value)}
            className="postadd-fields"
            type="text"
            placeholder="km"
            required
          />
        </div>
        <div className="postadd-text-fields">
          <h3>Price(ETH):</h3>
          <input
            onChange={(e) => setPrice(e.target.value)}
            className="postadd-fields"
            type="text"
            placeholder="Price in ETH"
            required
          />
        </div>
        <div>
          <h3>Description:</h3>
          <textarea
            onChange={(e) => setDes(e.target.value)}
            placeholder="Describe Your Car:"
            name=""
            id=""
            cols="70"
            rows="10"
          ></textarea>
        </div>
        <div>
          <h3>Photos:</h3>
          <input
            onChange={upload}
            className="postadd-fields"
            type="file"
            required
          />
        </div>
        <h1 className="postadd-form-heading">Contact Information</h1>
        <div className="postadd-text-fields">
          <h3>Number:</h3>
          <input
            onChange={(e) => setNo(e.target.value)}
            className="postadd-fields"
            type="text"
            placeholder="Mobile Number"
            required
          />
        </div>
        <div className="postadd-text-fields">
          <h3>Secondary Number:</h3>
          <input
            onChange={(e) => setSecno(e.target.value)}
            className="postadd-fields"
            type="text"
            placeholder="Secondary Number"
            required
          />
        </div>
        <div className="postadd-text-fields">
          <h3>Wallet Address</h3>
          <input
            onChange={(e) => setAddress(e.target.value)}
            className="postadd-fields"
            type="text"
            placeholder="wallet Address"
            required
          />
        </div>
        <button onClick={postadd} className="submit-btn">
          Submit
        </button>
      </div>
    </div>
  );
}
export default Postadd;
