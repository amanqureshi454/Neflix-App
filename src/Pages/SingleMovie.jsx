import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { add, remove } from "../Redux/WhishlistSlice";
import { FaStar, FaRegHeart, FaHeart } from "react-icons/fa";
import Navbar from "../Components/Navbar";
import axios from "axios";
import "./SingleMovie.css";

const SingleMovie = () => {
  const dispatch = useDispatch();
  // selecting the whishlist from our state
  const wishlist = useSelector((state) => state.whislist);
  // STATES
  const [movies, setMovies] = useState([]);
  const [related, setRelated] = useState([]);
  const [likes, setLikes] = useState({});

  /// USEPARAMS HOOK FOR FETCHING THE MOVIE BY HIS ID
  const { id } = useParams();
  useEffect(() => {
    // THIS IS FOR FETCHING THE SINGLE MOVIE DATA
    const apiKey = "06b1512078ff8fef434036d0db71232b";
    const fetchData = async () => {
      try {
        const apiUrl = `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=${apiKey}`;

        const response = await axios.get(apiUrl);

        setMovies(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    const relatedData = async () => {
      //THIS IS FOR FETCHING THE RELATED MOVIES DATA
      try {
        const apiURL = `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1&api_key=${apiKey}`;

        const response = await axios.get(apiURL);

        setRelated(response.data.results); // Corrected: Use response.data.results
      } catch (error) {
        console.log("Error", error);
      }
    };
    //CALLING DUNCTION
    fetchData();
    relatedData();
  }, [id]);
  // toggle functionality of like and dislike btn and related to state
  const handlerToggleLike = (movie) => {
    const isLiked = likes[movie.id] || false; // checking if the movie is already there
    if (isLiked) {
      // if it is then remove action will trigger
      dispatch(remove(movie.id));
    } else {
      dispatch(add(movie)); //else add
    }
    setLikes((prevLikes) => ({
      ...prevLikes,
      [movie.id]: !isLiked,
    }));
  };
  return (
    <>
      <Navbar />
      <div className="single__movie flex flex-col sm:flex-row px-4 sm:px-7 justify-evenly items-center mt-8 sm:mt-24">
        <div className="left__img mb-4 sm:mb-0">
          <img
            className="single_movie_img w-full sm:w-[450px] h-[650px] object-cover"
            src={`https://image.tmdb.org/t/p/original${movies?.poster_path}`}
            alt=""
          />
        </div>
        <div className="moive__detail p-4 sm:p-10 w-full sm:w-[700px] h-auto sm:h-[800px]">
          <div className="title flex  justify-between items-center">
            <h1 className="title_movie text-5xl sm:text-3xl text-white font-bold">
              {movies?.title}
            </h1>
            <h2 className="rating text-4xl items-center  justify-center gap-4 flex text-white">
              {`${Math.floor(movies.vote_average)}.0`}
              <FaStar color="yellow" size={30} />
            </h2>
          </div>
          <div className="released_date mt-4">
            <h2 className="relased text-white opacity-50 text-xl">
              <span className="">{`${movies?.release_date} |`}</span>{" "}
              <span className="">{`${movies?.runtime}min |`}</span>{" "}
              {`${movies?.vote_count}+`}{" "}
            </h2>
          </div>
          <div className="overview_details_scroolbar w-[700px] flex justify-start mt-7  items-center border-b">
            <h1 className="overview h-[50px] hover:text-[#fff] opacity-50 hover:opacity-100 font-bold uppercase cursor-pointer pb-4 mr-4 hover:border-b-8 hover:border-red-700 text-white text-xl ">
              overview
            </h1>
            <h1 className="overview h-[50px] hover:text-[#fff] opacity-50 hover:opacity-100 font-bold  uppercase cursor-pointer pb-4  mx-4 hover:border-b-8 hover:border-red-700 text-white text-xl ">
              trailer & more
            </h1>
            <h1 className="overview h-[50px] hover:text-[#fff] opacity-50 hover:opacity-100 font-bold uppercase cursor-pointer pb-4 mx-4 hover:border-b-8 hover:border-red-700 text-white text-xl ">
              more like this
            </h1>
            <h1 className="overview h-[50px] hover:text-[#fff] opacity-50 hover:opacity-100 font-bold uppercase cursor-pointer pb-4 mx-4 hover:border-b-8 hover:border-red-700 text-white text-xl ">
              details
            </h1>
          </div>
          <div className="info mt-4 sm:mt-8">
          <h3 className="info text-white w-full sm:w-[700px] text-xl">
              {movies?.overview}
            </h3>
          </div>
          <div className="starting mt-7 flex justify-between w-auto flex-col ">
            <h2 className="text-white text-xl my-3 ">
              <span className="inline-block text-left w-[200px] opacity-50">
                Status :
              </span>
              {movies?.status}
            </h2>
            <h2 className="text-white text-xl my-3 ">
              <span className="inline-block text-left w-[200px] opacity-50">
                Popularity :
              </span>
              {movies?.popularity}
            </h2>
            <h2 className="text-white text-xl  my-3">
              <span className="inline-block text-left w-[200px] opacity-50">
                Genre :
              </span>
              {movies?.genres
                ? movies.genres.map((genre) => genre.name).join(", ")
                : "N/A"}
            </h2>
          </div>
          {/* ////// RELATED MOVIES JSX */}
          <div className="related_heading mt-5">
            <h1 className="text-white text-3xl">Related Moives</h1>
          </div>
          <div className="related__movies_container flex flex-col sm:flex-row justify-start items-center gap-3 w-full sm:w-[700px]">
            {related.map((related) => {
              return (
                <div className="movie__box w=[230] h-[130px] mt-7 cursor-pointer relative">
                  <div className="img-movie">
                    <img
                      src={`https://image.tmdb.org/t/p/original${related?.poster_path}`}
                      alt=""
                    />
                  </div>
                  <div className="overlay">
                    <p className="text-center">{related?.title}</p>
                    {likes[related.id] ? (
                      <FaHeart
                        className="hover absolute top-4 left-4 text-gray-400"
                        size={20}
                        onClick={() => handlerToggleLike(related)}
                      />
                    ) : (
                      <FaRegHeart
                        onClick={() => handlerToggleLike(related)}
                        className="hover small-devies-heart absolute top-4 left-4 text-gray-400"
                        size={20}
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleMovie;
