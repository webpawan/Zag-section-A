import React, { useState } from "react";

import "./style.css";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
const Detail = () => {
  const location = useLocation();
  const [selectedSize, setSelectedSize] = useState("");
  const data = location.state;

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="container-fluid detail position-relative overflow-hidden">
      <div className=" detail__navigations mt-5 mb-2  d-flex justify-content-between align-item-center">
        <Link to="/" className="detail__back--icon">
          <img src="/icons/rightarrow.png" alt="" className="img-fluid ms-2" />
        </Link>

        <h1>Details</h1>
        <span className="detail__count--container ">
          <img src="/icons/bell.png" alt="" className="img-fluid" />
          <p className="detail__count">1</p>
        </span>
      </div>
      <div className="row  mx-auto ">
        <div className="detail__imgcomponent col-12 col-md-4 my-2 mx-auto position-relative">
          <img src={data.img} alt="" className="img-fluid" />
          <div className="detail__imgcomponent--save-icon">
            <span>
              <i className="fa-regular fa-heart"></i>
            </span>
          </div>
        </div>
        <div className=" detail__product--info col-12 col-md-8 my-2 mx-auto">
          <h1>{data.name}</h1>
          <div className="ratting">
            <span className="ratting__icon me-2">
              <i className="fa-regular fa-star"></i>
            </span>
            4.5/5<span className="mx-1"> (45 reviews)</span>
          </div>
          <p>{data.desc}</p>
          <h3 className="my-2">Choose size</h3>
          <div className=" d-flex controller__buttons">
            <div
              onClick={() => handleSizeSelection("S")}
              className={
                selectedSize === "S"
                  ? "selected  px-3 py-2 rounded border"
                  : "small__size px-3 py-2 rounded border"
              }
            >
              S
            </div>
            <div
              onClick={() => handleSizeSelection("M")}
              className={
                selectedSize === "M"
                  ? "selected  px-3 py-2 rounded border mx-2"
                  : "small__size px-3 py-2 rounded border mx-2"
              }
            >
              M
            </div>
            <div
              onClick={() => handleSizeSelection("L")}
              className={
                selectedSize === "L"
                  ? "selected  px-3 py-2 rounded border"
                  : "small__size px-3 py-2 rounded border"
              }
            >
              L
            </div>
          </div>
          <div className="mt-2">
            <hr />
            <div className="addtocart__button--container d-flex align-items-center">
              <div className="price d-flex flex-column ">
                <span>Price</span> <span>INR {data.price}</span>
              </div>
              <Link to="/cart" className="addtocart__btn text-decoration-none">
                {" "}
                <span className="mx-2">
                  <img src="/icons/beg.png" alt="" />
                </span>{" "}
                Add to Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
