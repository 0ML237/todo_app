/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Aside from "./Aside";
import Footer from "./Footer";
import Header from "./Header";
import Product_planning from "./Product_planning";
import "./css/Todos.css";

const Todo = (props) => {
  return (
    <div className="container">
      <div className="aside">
        <Aside />
      </div>
      <nav className="contain">
        <nav className="header">
          <Header title={props.title} />
        </nav>
        <main className="main">
          <Product_planning />
        </main>
        <footer className="footer">
          <Footer />
        </footer>
      </nav>
    </div>
  );
};

export default Todo;
