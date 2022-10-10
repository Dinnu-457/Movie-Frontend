import axios from 'axios';

const MOVIE_API_BASE_URL="http://localhost:8082/Movies/getMovies"
class MovieService{
    getMovies(){
        return axios.get(MOVIE_API_BASE_URL);
    }
}

export default new MovieService();