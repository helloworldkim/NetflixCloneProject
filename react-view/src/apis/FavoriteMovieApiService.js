import Axios from 'axios';

const API_URL = 'http://localhost:8090/mylist';

class FavoriteMovieApiService {
    //유저이메일에따라 저장목록 가져오기
    fetchMovie(user_id) {
        return Axios.get(API_URL + '/' + user_id);
    }

    // fetchMovie() {
    //     return Axios.get(API_URL);
    // }
    
    addMovie(movie) {
        return Axios.post(API_URL, movie);
    }
    
    removeMovie(id) {
        return Axios.delete(API_URL + '/' + id);
    }

    isMovie(movie_id) {
        return Axios.get(API_URL + '/' + movie_id);
    }

}

export default new FavoriteMovieApiService();
