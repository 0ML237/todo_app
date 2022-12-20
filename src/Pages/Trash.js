import Reac,{useEffect, useState} from "react";
import Index from "./Index";
import Product_planning2 from "../Components/Product_planning2";
import Header2 from "../Components/Header2";
import Footer2 from "../Components/Footer2";
import "./Css/Inbox.css";

const Trash = (props) => {
  const [id, setId] = useState();

  useEffect(() => {
    console.log("=================================================");
    console.log(id);
  }, [id]);

  return (
    <div className="page">
          <Index />
      <div className="main-container">
        <nav className="contain">
          <nav className="header">
            <Header2 title={props.title} />
          </nav>
          <main className="main">
            <Product_planning2 title={props.title} id={id} setId={setId} />
          </main>
          <footer className="footer">
            <Footer2 id={id} setId={setId} />
          </footer>
        </nav>
      </div>
    </div>
  );
};

export default Trash;
