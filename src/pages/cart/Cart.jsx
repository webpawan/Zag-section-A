import React from "react";

import "./style.css";

import { Link } from "react-router-dom";

const Data = [
  {
    id: "1",
    name: "Man jacket",
    price: "1,190",
    quantity: 2,
    img: "/images/1.4.webp",
    size: "L",
  },
  {
    id: "2",
    name: "Track jacket",
    price: "1,100",
    quantity: 2,

    img: "/images/3.0.webp",
    size: "M",
  },
  {
    id: "3",
    name: "Man shirt",
    price: "1,290",
    quantity: 1,

    img: "/images/4.0.webp",
    size: "L",
  },
];

const Cart = () => {
  return (
    <div className="container-fluid cart">
      <div className=" detail__navigations mt-5 mb-4 d-flex justify-content-between align-item-center">
        <Link to="/" className="detail__back--icon">
          <img src="/icons/rightarrow.png" alt="" className="img-fluid ms-2" />
        </Link>
        <h1>My Cart </h1>
        <span className="cart__count--container ">
          <img src="/icons/bell.png" alt="" className="img-fluid" />
          <p className="cart__count">1</p>
        </span>
      </div>
      <div className="row mx-auto">
        <div className="col-12 col-md-7 mx-auto d-flex flex-column px-2 mb-3">
          {Data.map((item) => {
            return (
              <div className="cart__container bg__gray d-flex flex-row my-2">
                <div className="cart__product--img  d-flex ">
                  <img src={item.img} alt="" srcset="" className="img-fluid" />
                </div>
                <div className="cart__product--info w-100  d-flex justify-content-between  ">
                  <div className="d-flex h-100 flex-column justify-content-between  mx-2">
                    <div className="d-flex flex-column">
                      <h2>{item.name}</h2>
                      <p>size {item.size}</p>
                    </div>
                    <h5>INR {item.price}</h5>
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
                        <div className="mx-2 mb-0">{item.quantity}</div>
                        <button className=" ">
                          <i class="fa-solid fa-plus"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
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
                <span>INR 0.00</span>
              </li>{" "}
              <li className="d-flex justify-content-between align-items-center">
                <span>shipping-fee</span>
                <span>INR 80</span>
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
