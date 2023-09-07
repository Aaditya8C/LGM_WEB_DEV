import React, { useState, useEffect } from "react";
import "./fetchData.scss";
import './navbar.scss';
// import "./script";
import Navbar from "./navbar";
import Layout from "./layout";
const FetchData = () => {
  const [users, setUsers] = useState([]);
  const [isShown,setIsShown] = useState(false);

  const getUsers = async () => {
    const response = await fetch("https://reqres.in/api/users?page=1");
    const actual = await response.json();
    let final = actual.data;
    // console.log(final);

    setUsers(final);
  };



  useEffect(() => {
    getUsers();
  }, []);

  const newton = () =>{
    setIsShown(true);
  }

  return (
    <>


{/* <div className="navbar">
        <div className="logo">
          <h1>
            Lets<span>G</span>
            row<span>M</span>ore
          </h1>
        </div>
        <div className="menu-items">
          <ul>
            <li>
              <button className="getUsers" onClick={newton}>
                Get Users
              </button>
            </li>
          </ul>
        </div>
      </div> */}

      
        {/* <div className="section">
          <div className="slide-container">
            <div className="row">
              {
                isShown && (
                  users.map((elem) => {
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
              </div> */}
      
        {/* <link rel="stylesheet" href="swiper-bundle.min.css"></link> */}
        {/* <div className="section">
          <div className="slide-container">
            <div className="row">
                {users.map((elem) => {
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
                })}
              </div>
            </div>
          </div> */}

          {/* <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-pagination"></div> */}

          {/* <pre>{JSON.stringify(users,null,2)}</pre> */}
  

      {/* Swiper JS */}
      {/* <script src="swiper-bundle.min.js"></script> */}

      {/* Simple JS */}
      {/* <script src="script.js"></script> */}

      {/* <FetchData fetData = {fetData} /> */}

      <Navbar nb = {users} fun = {newton} shown = {isShown}/>

      {/* <Layout lay = {users}/> */}
      {/* <Navbar /> */}
      {/* <Navbar /> */}
    </>
  );
};

export default FetchData;
