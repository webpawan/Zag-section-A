import React from "react";
import bellIcon from "../../assets/icons/bell-01.png";
import backIcon from "../../assets/icons/Icon (8).png";
import img from "../../assets/images/4.0.webp";
import productIcon from "../../assets/icons/beg.png";

import "./style.css";
const Detail = () => {
  return (
    <div className="container-fluid detail position-relative overflow-hidden">
      <div className=" detail__navigations mt-5 mb-2  d-flex justify-content-between align-item-center">
        <div className="detail__back--icon">
          <img src={backIcon} alt="" srcset="" className="img-fluid" />
        </div>
        <h1>Details</h1>
        <div className="detail__bell--icon">
          <img src={bellIcon} className="img-fluid" alt="" srcset="" />
        </div>
      </div>
      <div className="row  mx-auto ">
        <div className="detail__imgcomponent col-12 col-md-4 my-2 mx-auto position-relative">
          <img src={img} alt="" className="img-fluid" srcset="" />
          <div className="detail__imgcomponent--save-icon">
            <span>
              <i class="fa-regular fa-heart"></i>
            </span>
          </div>
        </div>
        <div className=" detail__product--info col-12 col-md-8 my-2 mx-auto">
          <h1>Regular fit slogan</h1>
          <div className="ratting">
            <span className="ratting__icon me-2">
              <i class="fa-regular fa-star"></i>
            </span>
            4.5/5<span className="mx-1"> (45 reviews)</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            minima sit commodi quia totam accusamus id ducimus labore qui neque.
          </p>
          <h3 className="my-2">Choose size</h3>
          <div className=" d-flex">
            <div className="small__size px-3 py-2 rounded border">S</div>
            <div className="mid__size mx-2 px-3 py-2 rounded border">M</div>
            <div className="big__size px-3 py-2 rounded border">L</div>
          </div>
          <div className="mt-2">
            <hr />
            <div className="addtocart__button--container d-flex align-items-center">
              <div className="price d-flex flex-column ">
                <span>Price</span> <span>INR 1,190</span>
              </div>
              <div className="addtocart__btn">
                {" "}
                <span className="">
                  <img src={productIcon} alt="" srcset="" />
                </span>{" "}
                Add to Cart
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
