import Axios from 'axios';

const API_URL = 'http://localhost:8090/api'  //spring boot back-end url

class ApiService {

    popularMovie(i) {   //인기있는 영화 데이터 받기
        return Axios.get(API_URL + '/movie/popular?page=' + i);
    }

    searchMovie(i, keyword) {   //검색해서 영화 데이터받기
        return Axios.get(API_URL + '/movie/detail?page=' + i + '&query=' + keyword);
    }

    detailMovie(id) {   //영화 디테일정보 받기
        return Axios.get(API_URL + '/movie/search?id=' + id);
    }

    genreMovie(i, genre) {   //장르로 나눠서 영화 데이터받기
        var result;
        var all_url = API_URL + '/movie/genre?page=' + i + '&genre=' + genre;
        return Axios.get(all_url);
    }

    sortByMovie(i, sort) {   //원하는 방식으로 정렬해서 영화데이터 받기
        return Axios.get(API_URL + '/movie/sortBy?page=' + i + '&sort=' + sort);
    }

    // imageMovie(id) {   //영화 이미지들 받기
    //     return Axios.get(API_URL + '/movie/image?id=' + id);
    // }

    realImageMovie(i, fileFath) {   //위에서 선택한 영화 이미지하나 불러올수 있는 주소 데이터 받기
        return Axios.get(API_URL + '/movie/realimage?image=' + fileFath);
    }

    videoMovie(id) {   //영화 비디오에 사용될 유튜브 키값 받기
        return Axios.get(API_URL + '/movie/video?id=' + id);
    }

    fetchUsers() {
        return Axios.get(API_URL);
    }

    fetchUserByID(id) {  //'http://localhost:8090/users/2' -> 특정 사용자 정보조회
        return Axios.get(API_URL + '/' + id)
    }

    addUser(user) { //POST 사용자 정보 back-end 전달
        return Axios.post(API_URL, user);
    }

}

export default new ApiService();