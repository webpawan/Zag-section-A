import React from "react";
import "./style.css";

import { Link } from "react-router-dom";

const Data = [
  {
    id: "1",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae ab ex molestias fuga velit perferendis nemo soluta consequatur, sint nam?",
    img: "/images/1.4.webp",
    name: "Man jacket",
    price: "1,190",
  },
  {
    id: "2",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae ab ex molestias fuga velit perferendis nemo soluta consequatur, sint nam?",
    img: "/images/3.0.webp",
    name: "Track jacket",
    price: "1,100",
  },
  {
    id: "3",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae ab ex molestias fuga velit perferendis nemo soluta consequatur, sint nam?",
    img: "/images/4.0.webp",
    name: "Man shirt",
    price: "1,290",
  },
  {
    id: "4",
    name: "product 2",
    price: "190",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae ab ex molestias fuga velit perferendis nemo soluta consequatur, sint nam?",
    img: "/images/4.3.webp",
  },
  {
    id: "5",
    name: "product 4",
    price: "290",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae ab ex molestias fuga velit perferendis nemo soluta consequatur, sint nam?",
    img: "/images/5.3.webp",
  },
  {
    id: "6",
    name: "product 5",
    price: "300",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae ab ex molestias fuga velit perferendis nemo soluta consequatur, sint nam?",
    img: "/images/6.1.webp",
  },
  {
    id: "7",
    name: "product 6",
    price: "100",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae ab ex molestias fuga velit perferendis nemo soluta consequatur, sint nam?",
    img: "/images/1.4.webp",
  },
  {
    id: "8",
    name: "product 7",
    price: "2000",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae ab ex molestias fuga velit perferendis nemo soluta consequatur, sint nam?",
    img: "/images/6.1.webp",
  },
];

const Home = () => {
  return (
    <div className="home">
      <nav className="nav w-100 mt-2 d-flex justify-content-between align-items-center container-fluid">
        <div className="navbar__heading d-flex justify-content-between align-items-center   ">
          <h1>Discover</h1>
          <span className="home__count--container ">
            <img src="/icons/bell.png" alt="" className="img-fluid" />
            <p className="home__count">1</p>
          </span>
        </div>

        <div className="navbar__fun flex d-flex justify-content-between align-items-center   ">
          <div className="realtive navbar__searchbar px-2  w-100 bg__gray ">
            <span className="">
              <img src="/icons/search" alt="" />
            </span>
            <input
              type="text"
              placeholder="search asythin"
              className="navbar__searchbar--input absolute bg__gray "
            />
          </div>{" "}
          <div className=" navbar__menu  bg-dark ">
            <img src="icons/menu.png" alt="" />
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
        {Data.map((item) => {
          return (
            <Link
              className=" col-6 col-md-4 col-lg-3 mx-auto mb-5 text-decoration-none text-dark"
              to={`/detail`}
              state={item}
              key={item.id}
            >
              <div className="card__container ">
                <div className="card__imgcontainer position-relative">
                  <img src={item.img} alt="" className="img-fluid" />
                  <div className="saved ">
                    <img src="/icons/heart.png" className="" alt="" />
                  </div>
                </div>
                <h2>{item.name}</h2>
                <p>INR {item.price} </p>,
              </div>
            </Link>
          );
        })}
      </div>
      <div className="navigations  mx-auto d-flex justify-content-center align-items-center  bg__gray">
        <ul className="d-flex justify-content-between align-items-center ">
          <li className="d-flex flex-column justify-content-between align-items-center  ">
            <Link to="/" className="text-decoration-none text-dark">
              <div className=" d-flex flex-column align-items-center justify-content-center text-decoration-none text-dark">
                <span className="">
                  <img src="/icons/home.png" />
                </span>
                <p className="m-0">Home</p>
              </div>
            </Link>
          </li>
          <li className="d-flex flex-column justify-content-between align-items-center ">
            <span>
              <img src="/icons/heart.png" />
            </span>
            <p className="m-0">Saved</p>
          </li>
          <li className="d-flex flex-column justify-content-between align-items-center ">
            <Link
              to="/cart"
              className=" d-flex flex-column align-items-center justify-content-center text-decoration-none text-dark"
            >
              <span>
                <img src="/icons/blackbeg.png" />
              </span>
              <p className="m-0 text-decoration-none ">Cart</p>
            </Link>
          </li>
          <li className="d-flex flex-column justify-content-between align-items-center ">
            <span>
              <img src="/icons/setting.png" />
            </span>
            <p className="m-0">Settings</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
