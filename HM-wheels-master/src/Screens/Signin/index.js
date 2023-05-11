import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInFirebase } from "../../config/firebase";
import UserContext from "../../context/userContext";
import "./signin.css";
import {ethers} from "ethers";
function Login() {
  const navigate = useNavigate();
  const { setUser, user } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signer, setsigner] = useState("");
  const [signerAdd, setsignerAdd] = useState("");
  const { setSign, sign } = useContext(UserContext);


  async function signin() {
    try {
      if (signerAdd !== ""){
      const active = await signInFirebase(email, password);
      setUser(active.user);
      setSign(signer);
      
      navigate("/");}
      else{
      alert("Connect Wallet")}
    } catch (e) {
      alert("Wrong email or pass");
    }
  }
  async function connectwallet() {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const account = await ethereum.request({
          method: "eth_requestAccounts",
        });

        
        const provider = await new ethers.providers.Web3Provider(ethereum);
        setsigner((provider.getSigner()));
        
        setsignerAdd(await (provider.getSigner().getAddress()));
      }
        
      else {
        alert("Please install metamask");
      }}
    catch (e) {
      alert(e);
    }
  }
  return (
    <div className="login-main">
      <div className="login">
        <h1 className="login-heading">Login In</h1>
        <input
          className="login-fields"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Enter your email"
        />
        <input
          className="login-fields"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Enter your password"
        />
        <input
          className="signup-fields"
          type="text"
          value={signerAdd}
          disabled
          required
          
        />
        <button onClick={connectwallet} className="signup-btn">
          connectwallet
        </button>
        <button onClick={signin} className="login-btn">
          login
        </button>
        <p className="login-signup">
          You have no account ?
          <a href="Signup" className="login-signup-link">
            signup
          </a>
        </p>
      </div>
    </div>
  );
}
export default Login;
