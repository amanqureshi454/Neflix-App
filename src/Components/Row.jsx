import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Row.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { add, remove } from "../Redux/WhishlistSlice";
import { useDispatch, useSelector } from "react-redux";

const Row = ({ title, fetchURL, rowID }) => {
  //dispatch action to like add, remove 
  const dispatch = useDispatch();
  // selecting the whishlist from our state
  const wishlist = useSelector((state) => state.whislist);

  const [movies, setMovies] = useState([]);
  const [likes, setLikes] = useState({});
//fetcthing data 
  useEffect(() => {
    axios
      .get(fetchURL)
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, [fetchURL]);
  // we pass array dependency because when we change the url(props url) then useeffect will run again , if array is empty then one useeffect run once


  // toggle functionality of like and dislike btn and related to state
  const handlerToggleLike = (movie) => {
    const isLiked = likes[movie.id] || false;// checking if the movie is already there
    if (isLiked) { // if it is then remove action will trigger
      dispatch(remove(movie.id));
    } else {
      dispatch(add(movie));//else add
    }
    setLikes((prevLikes) => ({ 
      ...prevLikes,
      [movie.id]: !isLiked,
    }));
  };
// slider functionality
  const sliderLeft = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const sliderRight = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollRight = slider.scrollRight + 500;
  };

  return (
    <div className="hero-container pl-7 pr-11 mt-5">
      <h1 className=" text-2xl text-white mb-3">{title}</h1>
      <div
        className="movie-list h-42 flex justify-start items-center gap-3 group"
        id={`slider` + rowID}
      >
        <MdChevronLeft
          onClick={sliderLeft}
          size={30}
          className="bg-white text-black left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        />
        {movies.map((movie, id) => (
          <div className="movie__box relative" key={id}>
            <div className="img-movie">
              <img
                className="object-cover w-[230px] h-[130px]"
                src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
                alt={movie?.title}
              />
            </div>
            <div className="overlay">
              <NavLink to={`/${movie.id}`} className="text-center">
                {movie?.title}
              </NavLink>
              {likes[movie.id] ? (
                <FaHeart
                  className="hover absolute top-4 left-4 text-gray-400"
                  size={20}
                  onClick={() => handlerToggleLike(movie)}
                />
              ) : (
                <FaRegHeart
                  onClick={() => handlerToggleLike(movie)}
                  className="hover absolute top-4 left-4 text-gray-400"
                  size={20}
                />
              )}
            </div>
          </div>
        ))}
        <MdChevronRight
          onClick={sliderRight}
          size={30}
          className="bg-white text-black right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        />
      </div>
    </div>
  );
};

export default Row;
