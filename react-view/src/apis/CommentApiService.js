import Axios from "axios";

const API_URL = "http://localhost:8090/comment"; //spring boot back-end url

class CommentApiService {
  writeMovieComment(comment) {
    return Axios.post(API_URL + "/write", comment);
  }
  getCommentList(movie_id) {
    return Axios.get(API_URL + "/list?movie_id=" + movie_id);
  }
  deleteComment(id) {
    return Axios.get(API_URL + "/delete?id=" + id);
  }
}

export default new CommentApiService();
