import Axios from 'axios';

const API_URL = 'http://localhost:8090/mylist';

class FavoriteMovieApiService {

    fetchMovies() {
        return Axios.get(API_URL);
    }
    
    addMovie(movie) {
        return Axios.post(API_URL, movie);
    }
    
    removeMovie(id) {
        return Axios.delete(API_URL + '/' + id);
    }

}

export default new FavoriteMovieApiService();
