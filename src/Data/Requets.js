
const apiKey = "06b1512078ff8fef434036d0db71232b";
const Requets = {
    Upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`,
    TopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`,
    Action: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`,
    Adventure: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&langugues=en-US&page=2`,
    Romance: `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&langugues=en-US&page=2`,
    Horror: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=horror`,
}
export default Requets;
// https://api.themoviedb.org/3/movie/popular?language=en-US&page=1