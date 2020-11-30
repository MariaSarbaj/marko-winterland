import './App.css';
import Header from "./Layout/Header/Header";
import React from "react";
import Main from "./Layout/Main/Main";
import Footer from "./Layout/Footer/Footer";

function App() {
  return (
      <>
    <Header/>
    <Main/>
    <Footer/>
        {console.log("Hello")}
      </>
  );
}

export default App;
