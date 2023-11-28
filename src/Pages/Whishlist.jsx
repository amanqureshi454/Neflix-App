import { React, useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { FaCross, FaTimes } from "react-icons/fa";
import { remove } from "../Redux/WhishlistSlice";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Whishlist = () => {
  const moviesList = useSelector((state) => state.whislist);
  const dispatch = useDispatch();
  const handlerRemove = (movies) => {
    dispatch(remove(movies));
  };

  return (
    <>
      <Navbar />
      <div className="hero_main mt-24">
        {/* OVERLAY FOR MAIN IMG */}
        <div className="overlay-gradient absolute w-full h-[550px]  bg-gradient-to-r from-black "></div>
        {/* CONTENT FOR MAIN */}
        <img
          className="main-hero-img object-cover"
          src={`https://i.ibb.co/vXqDmnh/background.jpg`}
          alt=""
        />
      </div>
      <div className="hero-container px-7 mt-5 ">
        <h1 className=" text-2xl text-white mb-3">My List</h1>
        <div className="movie-list h-42 flex justify-start items-center gap-3">
          {moviesList.length > 0 ? (
            moviesList.map((movie, id) => (
              //////// USING MOVIE.ID FOR FETCHING THAT PARTICULAR MOVIE BY HIS ID
              <div className="movie__box relative" key={id}>
                <div className="img-movie">
                  <img
                    className="object-cover w-[230px] h-[130px]"
                    src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
                    alt={movie?.title}
                  />
                </div>

                {/* /////OVERLAY FOR MOVIE - BOX  */}
                <div className="overlay">
                  <NavLink to={`/${movie.id}`} className="text-center text-white">{movie?.title}</NavLink>
                  <FaTimes
                    onClick={() => handlerRemove(movie.id)}
                    size={20}
                    className="hover text-white absolute top-4 right-4 cursor-pointer"
                  />
                </div>
              </div>
            ))
          ) : (
            <p className="text-white text-3xl ">No Movies in the Wishlist.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Whishlist;
