import React from "react";
import "./style.css";
import bellIcon from "../../assets/icons/bell-01.png";
import glass from "../../assets/icons/Icon (1).png";
import menu from "../../assets/icons/Icon (2).png";
import saveIcon from "../../assets/icons/Icon (3).png";
import img from "../../assets/images/1.4.webp";
import homeIcon from "../../assets/icons/Icon (4).png";
import cartIcon from "../../assets/icons/Icon (6).png";
import settingIcon from "../../assets/icons/Icon (7).png";

const Home = () => {
  return (
    <div className="home">
      <nav className="nav w-100 mt-2 d-flex justify-content-between align-items-center container-fluid">
        <div className="navbar__heading d-flex justify-content-between align-items-center   ">
          <h1>Discover</h1>
          <span className="">
            <img src={bellIcon} alt="" srcset="" className="img-fluid" />
          </span>
        </div>

        <div className="navbar__fun flex d-flex justify-content-between align-items-center   ">
          <div className="realtive navbar__searchbar px-2  w-100 bg__gray ">
            <span className="">
              <img src={glass} alt="" srcset="" />
            </span>
            <input
              type="text"
              placeholder="search asythin"
              className="navbar__searchbar--input absolute bg__gray "
            />
          </div>{" "}
          <div className=" navbar__menu  bg-dark ">
            <img src={menu} alt="" srcset="" />
          </div>
        </div>
      </nav>
      <div className="  categories mx-auto d-flex justify-content-center align-items-center py-3">
        <ul className="d-flex">
          <li>All</li>
          <li>Men</li>
          <li>Woman</li>
          <li>kids</li>
        </ul>
      </div>
      <div className=" row mx-auto mb-4">
        <div className=" col-6  col-md-4 col-lg-3 mx-auto my-2 ">
          <div className="card__container ">
            <div className="card__imgcontainer position-relative">
              <img src={img} alt="" srcset="" className="img-fluid" />
              <div className="saved ">
                <img src={saveIcon} className="" alt="" srcset="" />
              </div>
            </div>
            <h2>Product name</h2>
            <p>INR 11,90 </p>,
          </div>
        </div>
        <div className=" col-6  col-md-4 col-lg-3 mx-auto my-2 ">
          <div className="card__container ">
            <div className="card__imgcontainer position-relative">
              <img src={img} alt="" srcset="" className="img-fluid" />
              <div className="saved ">
                <img src={saveIcon} className="" alt="" srcset="" />
              </div>
            </div>
            <h2>Product name</h2>
            <p>INR 11,90 </p>,
          </div>
        </div>
      </div>
      <div className="navigations  mx-auto d-flex justify-content-center align-items-center  bg__gray">
        <ul className="d-flex justify-content-between align-items-center ">
          <li className="d-flex flex-column justify-content-between align-items-center  ">
            <span className="">
              <img src={homeIcon} />
            </span>
            <p className="m-0">Home</p>
          </li>
          <li className="d-flex flex-column justify-content-between align-items-center ">
            <span>
              <img src={saveIcon} />
            </span>
            <p className="m-0">Saved</p>
          </li>
          <li className="d-flex flex-column justify-content-between align-items-center ">
            <span>
              <img src={cartIcon} />
            </span>
            <p className="m-0">Cart</p>
          </li>
          <li className="d-flex flex-column justify-content-between align-items-center ">
            <span>
              <img src={settingIcon} />
            </span>
            <p className="m-0">Settings</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
