import React from "react";
import Layout from "./layout";
import "./navbar.scss";
// import FetchData from "./fetchData";

export default function navbar(props) {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <h1>
            Lets<span>G</span>
            row<span>M</span>ore
          </h1>
        </div>
        <div className="menu-items">
          <ul>
            <li>
              <button className="getUsers" onClick={props.fun}>
                Get Users
              </button>
            </li>
          </ul>
        </div>
      </div>


      <div className="section">
          <div className="slide-container">
            <div className="row">
              {
                props.shown && (
                  props.nb.map((elem) => {
                    return (
                      <div className="card">
                        <div className="image-content">
                          <span className="overlay"></span>
                          <div className="card-image">
                            <img src={elem.avatar} alt="" className="cardImage" />
                          </div>
                        </div>
                        <div className="card-content">
                          <h2>Name: {elem.first_name}</h2>
                          <h2>{elem.last_name}</h2>
                          <p>Id: {elem.id}</p>
                          <p>Email: {elem.email}</p>
                        </div>
                      </div>
                    );
                  })
                )
              }
              </div>
              </div>
              </div>
     

      {/* <FetchData fetData = {} */}
    </>
  );
}
