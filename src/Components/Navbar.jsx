import React, { useEffect, useRef, useState } from "react";
import { FaBell, FaHeart, FaSearch, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { CiMenuFries } from "react-icons/ci";
import "./Navbar.css";
const Navbar = () => {
  const movieSubs = useSelector((state) => state.whislist);
  const [searchInput, setSearchInput] = useState(true);
  const [isOpen, setIsopen] = useState(false);
  const onClickSearchHandler = () => {
    setSearchInput((input) => !input);
  };

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };

  return (
    <>
      <nav className="flex nav-lg justify-between items-center px-7 py-5">
        <div className="logo-nav flex justify-center items-center">
          <img src="/logo.png" alt="Netflix" />
          <div className="links ml-5">
            <ul>
              <li>
                <Link to="/hero" className="hover nav-links">
                  Home
                </Link>
                <Link className="hover nav-links">TV Shows</Link>
                <Link className="hover nav-links">Movies</Link>
                <Link className="hover nav-links">Latest</Link>
                <Link to="/whishlist" className="hover nav-links">
                  My List
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="whislist">
          <ul>
            <li className="flex justify-center items-center">
              <Link className="nav-links m-0 hover">KIDS</Link>
              <Link className="nav-links m-0 hover">DVDS</Link>
              <div className="nav-icons m-3  flex justify-center items-center gap-6 cursor-pointer">
                <input
                  type="text"
                  className={` w-[150px] h-[30px] bg-black text-white p-3 ${
                    searchInput ? "hidden" : ""
                  } `}
                  placeholder="Search"
                />
                <FaSearch
                  onClick={onClickSearchHandler}
                  className="hover"
                  size={25}
                />
                <Link to="/whishlist" className="heart">
                  <FaHeart className="hover relative" size={25} />
                  <span className="count text-center absolute rounded-full text-[10px] bg-red-800 text-white top-[36%] h-[15px] w-[16px] right-[4.8%]">
                    {movieSubs.length}
                  </span>
                </Link>
                <FaBell className="hover" size={25} />
              </div>
            </li>
          </ul>
        </div>
      </nav>
      {/* <nav className="small-devices flex justify-between items-center px-4">
        <img src="/logo.png" alt="Netflix" />
        <div className="icons-small_devices flex justify-between items-center gap-4">
          <CiMenuFries size={30} />
          <FaHeart className="hover relative" size={25} />
          <span className="count text-center absolute rounded-full text-[10px] bg-red-800 text-white top-[36%] h-[15px] w-[16px] right-[4%]">
            {movieSubs.length}
          </span>
        </div> */}
      {/* <div className="nav-link_small-devices">
          <div className="links-small ml-5 bg-black absolute top-0 left-0 w-full h-full">
            <ul className="flex flex-col justify-center items-center">
              <li>
                <Link to="/hero" className="hover block nav-links">
                  Home
                </Link>
                <Link className="hover block nav-links">TV Shows</Link>
                <Link className="hover block nav-links">Movies</Link>
                <Link className="hover block nav-links">Latest</Link>
                <Link to="/whishlist" className="hover block nav-links">
                  My List
                </Link>
              </li>
            </ul>
          </div>
        </div> */}
      {/* </nav> */}
      <div className="container-fluid hidden-lg mt-3">
        <nav className="navbar navbar-expand-lg navbar-light bg-black ">
          <div className="container-fluid pt-8 flex justify-between items-center px-4 ">
            <img src="/logo.png" alt="Netflix" />
            <div className="">
              <div className="btn btn-primary-menu">
                <div className="icons-small_devices flex justify-between items-center gap-4">
                  <CiMenuFries size={30} onClick={ToggleSidebar} />
                  <Link to="/whishlist" className="heart">
                    <FaHeart className="hover-heart relative" size={25} />
                    <span className="count text-center absolute rounded-full text-[10px] bg-red-800 text-white top-[36%] h-[15px] w-[16px] right-[4%]">
                      {movieSubs.length}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className={`sidebar ${isOpen === true ? "active" : ""}`}>
          <div className="sd-header">
            <h4 className="mb-0">Menu</h4>
            <div
              className="btn btn-primary-close text-white"
              onClick={ToggleSidebar}
            >
              <FaTimes size={30} />
            </div>
          </div>
          <div className="sd-body">
            <ul>
              <li>
                <Link to="/hero" className=" sd-link">
                  Home
                </Link>
              </li>
              <li>
                <Link className="sd-link ">TV Shows</Link>
              </li>
              <li>
                <Link className="sd-link ">Movies</Link>
              </li>
              <li>
                <Link  className="sd-link ">Latest</Link>
              </li>
              <li>
                <Link to="/whishlist" className="sd-link ">My List</Link>
              </li>
              <li>
                <Link className="sd-link ">Kids</Link>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`sidebar-overlay ${isOpen === true ? "active" : ""}`}
          onClick={ToggleSidebar}
        ></div>
      </div>
    </>
  );
};

export default Navbar;
