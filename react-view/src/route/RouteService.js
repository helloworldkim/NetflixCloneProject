import Axios from 'axios';

const API_URL = 'http://localhost:8090/users'  //spring boot back-end url

class ApiService {

    fetchUsers() {  //'http://localhost:8090/users' -> 사용자 전체 리스트
        return Axios.get(API_URL);
    }

    fetchUserByID(id) {  //'http://localhost:8090/users/2' -> 특정 사용자 정보조회
        return Axios.get(API_URL + '/' + id)
    }

    addUser(user) { //POST 사용자 정보 back-end 전달
        return Axios.post(API_URL, user);
    }

    editUser(user) {    //PUT 사용자 수정정보 back-end로 전달
        return Axios.put(API_URL + '/' + user.id, user);
    }

    removeUser(id) {    //DELETE 사용자 아이디 전달
        return Axios.delete(API_URL + '/' + id);
    }
}

export default new ApiService();