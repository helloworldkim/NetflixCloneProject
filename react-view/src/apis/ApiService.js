import Axios from 'axios';

const API_URL = 'http://localhost:8090/'  //spring boot back-end url

class ApiService {

    popularMovie(i) {   //인기있는 영화 데이터 받기
        return Axios.get(API_URL + 'api/movie/popular?page=' + i);
    }

    searchMovie(i, keyword) {   //검색해서 영화 데이터받기
        return Axios.get(API_URL + 'api/movie/detail?page=' + i + '&query=' + keyword);
    }

    detailMovie(id) {   //영화 디테일정보 받기
        return Axios.get(API_URL + 'api/movie/search?id=' + id);
    }

    genreMovie(i, genre) {   //장르로 나눠서 영화 데이터받기
        var result;
        var all_url = API_URL + 'api/movie/genre?page=' + i + '&genre=' + genre;
        return Axios.get(all_url);
    }

    sortByMovie(i, sort) {   //원하는 방식으로 정렬해서 영화데이터 받기
        return Axios.get(API_URL + 'api/movie/sortBy?page=' + i + '&sort=' + sort);
    }

    // imageMovie(id) {   //영화 이미지들 받기
    //     return Axios.get(API_URL + '/movie/image?id=' + id);
    // }

    realImageMovie(i, fileFath) {   //위에서 선택한 영화 이미지하나 불러올수 있는 주소 데이터 받기
        return Axios.get(API_URL + 'api/movie/realimage?image=' + fileFath);
    }

    videoMovie(id) {   //영화 비디오에 사용될 유튜브 키값 받기
        return Axios.get(API_URL + 'api/movie/video?id=' + id);
    }

    loginUser() {//로그인
        return Axios.get(API_URL + 'user/login')
    }
    addUser() {//회원가입
        return Axios.get(API_URL +'user')
    }
    checkEmail(email) {//email 중복확인
        return Axios.get(API_URL + 'user?email='+email);
    }

}

export default new ApiService();