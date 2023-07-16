import React from "react";
import bellIcon from "../../assets/icons/bell-01.png";
import backIcon from "../../assets/icons/Icon (8).png";
import img from "../../assets/images/4.0.webp";
import "./style.css";
import deleteIcon from "../../assets/icons/Icon (2).png";

const Cart = () => {
  return (
    <div className="container-fluid cart">
      <div className=" detail__navigations mt-5 mb-4 d-flex justify-content-between align-item-center">
        <div className="detail__back--icon">
          <img src={backIcon} alt="" srcset="" className="img-fluid" />
        </div>
        <h1>My Cart </h1>
        <div className="detail__bell--icon">
          <img src={bellIcon} className="img-fluid" alt="" srcset="" />
        </div>
      </div>
      <div className="row mx-auto">
        <div className="col-12 col-md-7 mx-auto d-flex flex-column px-2 mb-3">
          <div className="cart__container bg__gray d-flex flex-row">
            <div className="cart__product--img  d-flex ">
              <img src={img} alt="" srcset="" className="img-fluid" />
            </div>
            <div className="cart__product--info w-100  d-flex justify-content-between  ">
              <div className="d-flex h-100 flex-column justify-content-between  mx-2">
                <div className="d-flex flex-column">
                  <h2>Regulary fit slogan </h2>
                  <p> Size L</p>
                </div>
                <h5>INR 1,190</h5>
              </div>
              <div className="cart__product--buttons mt-2 ">
                <div className="d-flex  h-100 flex-column justify-content-between  ">
                  <div className="d-flex justify-content-end text-danger">
                    <i class="fa-regular fa-trash-can "></i>
                  </div>
                  <div className="buttons d-flex align-items-center ">
                    <button className=" ">
                      <i class="fa-solid fa-minus"></i>
                    </button>
                    <div className="mx-2 mb-0">0</div>
                    <button className=" ">
                      <i class="fa-solid fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-5 mx-auto d-flex flex-column px-2  ">
          <div className="voucher mx-auto  mb-3 ">
            <input
              type="text"
              placeholder="Add a Voucer "
              className=" bg__gray p-3"
            />
          </div>
          <div className="product__prices   mx-auto ">
            <ul className=" p-0">
              <li className="w-full d-flex  justify-content-between align-items-center  mt-4">
                <span className="p-0 m-0">sub-total</span>
                <span>INR 5,870</span>
              </li>
              <li className="w-100 d-flex justify-content-between align-items-center my-3">
                <span>VAT (%)</span>
                <span>INR 5,870</span>
              </li>{" "}
              <li className="d-flex justify-content-between align-items-center">
                <span>shipping-fee</span>
                <span>INR 5,870</span>
              </li>
              <hr />
              <li className="d-flex justify-content-between align-items-center">
                <span>Total</span>
                <span>INR 5,870</span>
              </li>
            </ul>
          </div>
          <hr />
          <div className="checkout  mx-auto">
            <button className="btn btn-dark w-100 ">
              checkout{" "}
              <span className="mx-2">
                <i class="fa-solid fa-arrow-right"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
