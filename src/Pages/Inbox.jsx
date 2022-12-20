import React,{useState,useEffect} from "react";
import Index from "./Index";
import Product_planning from "../Components/Product_planning";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "./Css/Inbox.css";

const Inbox = (props) => {
  const [id, setId] = useState();

  // useEffect(() => {
  //   console.log("=================================================");
  //   console.log(id);
  // }, [id]);

  return (
    <div className="page">
      <Index />
      <div className="main-container">
        <nav className="contain">
          <nav className="header">
            <Header title={props.title} />
          </nav>
          <main className="main">
            <Product_planning title={props.title} id={id} setId={setId} />
          </main>
          <footer className="footer">
            <Footer id={id} setId={setId}/>
          </footer>
        </nav>
      </div>
    </div>
  );
};

export default Inbox;
