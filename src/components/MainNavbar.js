import React, { useState } from "react";
import data from "../data";

function MainNavbar() {
  console.log("Current Menu: ", data);
  const [menu, setMenu] = useState(null);

  const getSubMenu = (menu) => {
    let newMenu = {
      column1: [],
      column2: [],
      column3: [],
      images: [],
      col2: [],

      noOfColumns: 0,
      url_path: menu.url_path,
    };
    menu.children_data.map((it) => {
      if (it.custom_category_name) {
        newMenu.col2.push(it);
      }
    });
    menu.children_data
      .filter(
        (item) =>
          item.is_active &&
          !(item.name.includes("Column") || item.name.includes("Link"))
      )
      .map((item) => {
        if (item.name.includes("Latest") || item.name.includes("New")) {
          newMenu.column1.push(item);
        } else newMenu.column2.push(item);

        if (item.dropdown_image_url && newMenu.images.length < 4)
          newMenu.images.push(item.dropdown_image_url);
      });

    setMenu(newMenu);
  };

  return (
    <div>
      <nav>
        <div className="wrapper">
          <ul className="nav-Main">
            <li>
              {data.navCatagories.map((menu, key) => (
                <a
                  href="#"
                  onMouseEnter={() => getSubMenu(menu)}
                  className="desktop-item"
                  key={key}
                >
                  {menu.url_path}
                </a>
              ))}

              <div className="mega-box">
                <div className="container-fluid hover__menu">
                  <div className="row ">
                    <div className="col-md-6 ">
                      <ul className="">
                        {menu && menu.url_path !== "latest-products" ? (
                          <div className="row">
                            {menu && menu.column2 && menu.column2.length
                              ? menu.column2.map((item) => (
                                  <div className="col-md-6">
                                    <li>
                                      <a href="#" className="my-0">
                                        <span className="sub__menu_det">
                                          {item.name}
                                        </span>
                                      </a>
                                    </li>
                                  </div>
                                ))
                              : null}
                          </div>
                        ) : (
                          <div className="row">
                            <div className="col-md-6">
                              <p className="ml-4 font-weight-bold">
                                View Latest
                              </p>
                            </div>
                            <div className="col-md-6">
                              <p className="ml-3 font-weight-bold">
                                Latest Brands
                              </p>
                            </div>
                            <div className="col-md-6">
                              {menu && menu.column1 && menu.column1.length
                                ? menu.column1.map((item) => (
                                    <div className="col-md-12">
                                      <li>
                                        <a href="#" className="my-0">
                                          <span className="sub__menu_det">
                                            {item.name}
                                          </span>
                                        </a>
                                      </li>
                                    </div>
                                  ))
                                : null}
                            </div>
                            <div className="col-md-6">
                              {menu && menu.col2 && menu.col2.length
                                ? menu.col2.map((item) => (
                                    <li>
                                      <a href="#" className="my-0">
                                        <span className="sub__menu_det">
                                          {item.custom_category_name}
                                        </span>
                                      </a>
                                    </li>
                                  ))
                                : null}
                            </div>
                          </div>
                        )}
                      </ul>
                    </div>

                    <div className="col-md-6 col-6">
                      <div className="d-flex justify-content-around flex-wrap">
                        {menu && menu.images && menu.images.length
                          ? menu.images.map((imageSrc) => {
                              return (
                                <div>
                                  <img
                                    src={imageSrc}
                                    alt={"Image"}
                                    height="150"
                                    width="220"
                                    className="my-2 imgess__hover"
                                  />
                                </div>
                              );
                            })
                          : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default MainNavbar;
