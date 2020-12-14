import Axios from 'axios';

const SPRING_API_URL = '';

class ApiService {
    fetchMovies(){
        return Axios.get(SPRING_API_URL);
    }
}

export default new ApiService();