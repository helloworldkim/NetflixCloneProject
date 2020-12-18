import Axios from 'axios';

const API_URL = 'http://localhost:8090/mylist';

class FavoriteMovieApiService {
    //유저이메일에따라 저장목록 가져오기
    // fetchMovies(user_email) {
    //     return Axios.get(API_URL + '/' + user_email);
    // }

    fetchMovie() {
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
