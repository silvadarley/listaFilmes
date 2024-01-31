import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "35eb9b4c96ce215de729b3783c5a0b11";

const withBaseUrl = (path) => `${BASE_URL}${path}?api_key=${API_KEY}`;

export class MovieService{
    static getMovies(){
        return axios(withBaseUrl("movie/popular"));
    }

    static getMoviesDetails(id){
        return axios(withBaseUrl(`movie/${id}`));
        // return axios(withBaseUrl("movie/157336"));
    }

    static searchMovies(movie){
        return axios(withBaseUrl("search/movie")+`&query=${movie}`);
    }
}