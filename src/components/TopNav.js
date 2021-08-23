import React from "react";
import icon from "../assets/icon.png";

export default function TopNav() {
  return (
    <div>
      <h6 className="top__nav">
        Free UK Delivery on all orders over $150 | free uk return
      </h6>

      <nav className="navbar navbar-expand-lg navbar-light top_nav_height mt-2">
        <a className="navbar-brand" href="#">
          <img src={icon} alt="" width="30" height="20" />
          <span className="logo__text"> United Kingdom</span>
        </a>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">
              LOGIN
            </a>
          </li>
        </ul>
      </nav>

      <nav className="navbar navbar-expand-lg navbar-light ">
        <a
          className="navbar-brandd mx-auto mt-3"
          href="#"
          style={{ position: "relative", left: "15%" }}
        >
          END.
        </a>

        <ul className="navbar-nav ml-auto last_nav">
          <li className="nav-item ">
            <a className="nav-link " href="#">
              <i className="fas fa-search icons__css"></i>
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link " href="#">
              <i className="fas fa-cart-arrow-down icons__css"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
