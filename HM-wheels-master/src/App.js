import Signup from "./Screens/Signup";
import Login from "./Screens/Signin";
import Videos from "./Screens/Videos";
import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import Postadd from "./Screens/Postadd";
import Newcars from "./Screens/Newcars";
import Detail from "./Screens/Home/Detail";
import UserContext from "./context/userContext";
function App() {
  const [user, setUser] = useState("");
  const [sign, setSign] = useState("");
  return (
    <UserContext.Provider value={{ user, setUser , sign, setSign}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Signin" element={<Login />} />
          <Route path="/postadd" element={<Postadd />} />
          <Route path="/video" element={<Videos />} />
          <Route path="/new" element={<Newcars />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
export default App;
