import React from "react";
import bellIcon from "../../assets/icons/bell-01.png";
import backIcon from "../../assets/icons/Icon (8).png";
import img from "../../assets/images/4.0.webp";
import saveIcon from "../../assets/icons/Icon (3).png";

import "./style.css";
const Detail = () => {
  return (
    <div className="container-fluid detail position-relative overflow-hidden">
      <div className=" detail__navigations mt-5 d-flex justify-content-between align-item-center">
        <div className="detail__back--icon">
          <img src={backIcon} alt="" srcset="" className="img-fluid" />
        </div>
        <h1>Details</h1>
        <div className="detail__bell--icon">
          <img src={bellIcon} className="img-fluid" alt="" srcset="" />
        </div>
      </div>
      <div className="row  mx-auto ">
        <div className="col-12 col-md-4 my-2 mx-auto position-relative">
          <img src={img} alt="" className="img-fluid" srcset="" />
          <div className="detail__imgcomponent--save-icon">
            <span>
              <i class="fa-regular fa-heart"></i>
            </span>
          </div>
        </div>
        <div className="col-12 col-md-8 my-2 mx-auto">
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
            <div className="price">price INR 1,190</div>
            <div className="addtocart__btn">add to cart</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
