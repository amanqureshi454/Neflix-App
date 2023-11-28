import React, { useEffect, useState } from "react";
import Row from "../Components/Row";
import Navbar from "../Components/Navbar";
import { FaPlay, FaPlus } from "react-icons/fa";
import Requets from "../Data/Requets";
import { add } from "../Redux/WhishlistSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
import "./Hero.css";

const Hero = () => {
  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();

  // TO TAKE THE RANDOM IMGS FOR MAIN SECTION
  const movie =
    movies.length > 0
      ? movies[Math.floor(Math.random() * movies.length)]
      : null;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace 'YOUR_API_KEY' with your actual TMDB API key
        const apiKey = "06b1512078ff8fef434036d0db71232b";
        const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

        const response = await axios.get(apiUrl);
        setMovies(response.data.results); // Axios already parses JSON
      } catch (error) {
       
      }
    };

    fetchData();
  }, []);
  const handlerAdd = (movies) => {
    dispatch(add(movies));
  };
  return (
    <>
      <Navbar />
      <div className="hero_main mt-24">
        {/* OVERLAY FOR MAIN IMG */}
        <div className="overlay-gradient absolute w-full h-[550px]  bg-gradient-to-r from-black "></div>
        {/* CONTENT FOR MAIN */}
        <div className="contect-hero absolute top-[35%] left-[0%] px-7">
          <h1 className="movie__name  text-white text-5xl font-bold py-5 text-left">
            {movie?.title}
          </h1>
          <h6 className="descrption text-lg pb-5">{movie?.overview}</h6>
          <div className="buttons-hero  flex justify-start items-center">
            <button className="btn-1 bg-white text-black">
              {" "}
              <FaPlay size={18} />
              Play
            </button>
            <button className="btn-1 bg-transparent text-white border"onClick={() => handlerAdd(movie)}>
              {" "}
              <FaPlus size={18}  /> Watch
              Later
            </button>
          </div>
        </div>
        <img
          className="main-hero-img object-cover"
          src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
          alt=""
        />
      </div>

      {/* // ROW COMPONENTS  */}
      <Row rowID="1" title="Up Coming" fetchURL={Requets.Upcoming} />
      <Row rowID="2" title="Top Rated" fetchURL={Requets.TopRated} />
      <Row rowID="3" title="Action" fetchURL={Requets.Action} />
      <Row rowID="4" title="Adventure" fetchURL={Requets.Adventure} />
      <Row rowID="5" title="Romace" fetchURL={Requets.Romance} />
      <Row rowID="6" title="Horror" fetchURL={Requets.Horror} />
    </>
  );
};

export default Hero;
