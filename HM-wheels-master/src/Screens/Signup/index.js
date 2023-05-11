import {ethers} from "ethers";
import { useState } from "react";
import { signUpFirebase } from "../../config/firebase";
import "./signup.css";

function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signer, setsigner] = useState("");
  const [signerAdd, setsignerAdd] = useState("");
  async function signup() {
    try {
      
        await signUpFirebase({ fullName, email, password });
        alert("registered successfully");
      
      

      
    } catch (e) {
      alert("Please enter right information");
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
    <div className="signup-main">
      <div className="signup">
        <h1 className="signup-heading">Sign Up</h1>
        <input
          className="signup-fields"
          type="text"
          placeholder="Enter your full name"
          onChange={(e) => setFullName(e.target.value)}
          value={fullName}
        />
        <input
          className="signup-fields"
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          className="signup-fields"
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <input
          className="signup-fields"
          type="password"
          placeholder="Confirm your password"
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
        <button onClick={signup} className="signup-btn">
          Sign up
        </button>
        <p className="signup-login">
          You have already account ?
          <a href="Signin" className="signup-login-link">
            login
          </a>
        </p>
      </div>
    </div>
  );
}
export default Signup;