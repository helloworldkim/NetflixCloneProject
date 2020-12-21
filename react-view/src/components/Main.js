import React, { Component } from "react";
import TMDBMovieApiService from "../apis/TMDBMovieApiService";
import Row from "./Row";

class MainPage extends Component {
  constructor(props) {
    super(props);
    // console.log("Main props", props);
    // console.log(
    //   "Main props",
    //   props.location.search.replace("?", "").split("=")
    // );
    //페이스북 로그인했을때 아이디값이 queryString으로 날아옴! 해당부분 받아서 세션 저장하는 부분임
    console.log(props.location.search);
    if(props.location.search!==''){
      let id = props.location.search.replace("?", "").split("=");
      console.log(id);
      console.log(id[1]);
      sessionStorage.setItem("user", id[1]);
    }
    this.state = {
      //   genre: ['28', '12', '35', '99', '10751', '14', '27'],
      genre: [
        "Action",
        "Adventure",
        "Comedy",
        "Documentary",
        "Family",
        "Fantasy",
        "Horror",
      ],
      populars: '',
    };
  }
  componentDidMount() {
    this.getAllMoviesByGenre();
    this.getMainPopularMovies();
  }

  getAllMoviesByGenre = async () => {
    for (let i = 0; i < this.state.genre.length; i++) {
      //debugger;
      await TMDBMovieApiService.getGenreList(this.state.genre[i])
        .then((res) => {
          //console.log(res.data.results);
          switch (i) {
            case 0: // 액션
              this.setState({ actions: res.data.results.slice(10) }, () => {});
              break;
            case 1: // 어드벤처
              this.setState(
                { adventures: res.data.results.slice(10) },
                () => {}
              );
              break;
            case 2: // 코미디
              this.setState({ comedys: res.data.results.slice(10) }, () => {});
              break;
            case 3: // 다큐멘터리
              this.setState(
                { documentarys: res.data.results.slice(10) },
                () => {}
              );
              break;
            case 4: // 가족 영화
              this.setState({ familys: res.data.results.slice(10) }, () => {});
              break;
            case 5: // 판타지
              this.setState({ fantasys: res.data.results.slice(10) }, () => {});
              break;
            case 6: // 호러
              this.setState({ horrors: res.data.results.slice(10) }, () => {});
              break;
            default:
              break;
          }
        })
        .catch((err) => {
          console.error("getGenreList get 오류 : ", err);
        });
    }
  };
  getMainPopularMovies = async () => {
    await TMDBMovieApiService.getPopularMovies(1)
      .then((res) => {
        this.setState({ populars: res.data.results }, () => {});
      })
      .catch((err) => {
        console.error('getMainPopularMovies 오류 : ', err)
      });
  };
  render() {
    return (
      <div style={{ backgroundColor: "#181818", paddingRight: "15px" }}>
        <div className="row">
          <div className="col-12">
            <iframe
              src="https://youtube.com/embed/UIA1QoGATHY"
              title="Youtube Video Player"
              className="video"
              allowFullScreen
              frameBorder="0"
              style={{ width: "100%", height: "80vh" }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button
              type="button"
              className="btn btn-light"
              style={{ margin: 10 }}
              children="▶ 재생"
            />
            <button
              type="button"
              className="btn btn-secondary"
              children="상세 정보"
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Row
              actions={this.state.actions}
              adventures={this.state.adventures}
              comedys={this.state.comedys}
              documentarys={this.state.documentarys}
              familys={this.state.familys}
              fantasys={this.state.fantasys}
              horrors={this.state.horrors}
              populars={this.state.populars}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
