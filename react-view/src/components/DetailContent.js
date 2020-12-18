import React, { Component } from 'react';
import { Modal } from 'reactstrap';
import TMDBMovieApiService from '../apis/TMDBMovieApiService';

class DetailContentCompoent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      movie: this.props.movie,
      modal: false, //기본 모달값 false
      details: {},
      genres: [],
      //전달받은 포스터 이미지를 그대로 보여줌
      poster_image:
        'http://image.tmdb.org/t/p/w500' + this.props.movie.poster_path,
      cnt: 0, //로그아웃
      onLogin: this.onLogin,
      sessionStorage
      }
    }
    // Login Func
  onLogin = () => {
      this.setState({
        cnt: 1
      })
    }

  //이미지 클릭시 필요한 데이터를 모두 호출 하는메서드
  getAllInfo = () => {
    this.getMovieDetails();
    this.getMoviesYoutubeKey();
    this.getMovieCredits();
    this.getSimilarMovies();
  };

  //영화 디테일을 들고오는 메서드
  getMovieDetails = async () => {
    let res = await TMDBMovieApiService.getMovieDetails(this.state.id);
    let genres = res.data.genres.map((item) => {
      return item.name;
    });
    this.setState(
      {
        details: res.data,
        genres: genres,
      },
      () => {
        console.log('눌렀을때 디테일값!', this.state.details);
        console.log('this.state.poster_image : ', this.state.poster_image);
        // console.log('눌렀을때 장르값!', this.state.genres);
      },
    );
  };
  //유튜브 키값을 들고오는 메서드
  getMoviesYoutubeKey = async () => {
    let res = await TMDBMovieApiService.getYoutubeKey(this.state.id);
    //유튜브 영상이 있는경우 키값을 저장
    if (res.data.results[0] !== undefined) {
      console.log('youtubeKey데이터:', res.data.results[0].key);
      //대표 유튜브영상 1개만 들고와서 저장함
      this.setState(
        {
          key:
            'https://youtube.com/embed/' +
            res.data.results[0].key +
            '?autoplay=1',
        },
        () => {
          // console.log('눌렀을때 youtubeKey값!', this.state.key);
        },
      );
      //없는경우 key를 false로 저장함
    } else {
      this.setState({ key: false });
    }
  };
  //참여 배우명단을 불러오는 메서드
  getMovieCredits = async () => {
    let res = await TMDBMovieApiService.getCredits(this.state.id);
    let cast = res.data.cast.slice(0, 6).map((item) => {
      return item.name;
    });
    // console.log('참여 스테프정보:', res.data);
    // console.log('참여 배우:', res.data.cast);
    this.setState(
      {
        cast: cast,
      },
      () => {
        // console.log('눌렀을때 cast값!', this.state.cast);
      },
    );
  };
  getSimilarMovies = async () => {
    let res = await TMDBMovieApiService.getSimilarMovies(this.state.id);
    console.log('유사한영화데이터들', res.data.results);
    let similarMovies = res.data.results;
    this.setState({ similarMovies: similarMovies });
  };
  //전달받은 배열을 콤마로 구분한 String으로 만들어주는 메서드
  seperactor = (Array) => {
    var seperactor = ',';
    var tempString = '';
    for (var i = 0; i < Array.length; i++) {
      tempString += Array[i] + seperactor;
      if (i === Array.length - 1) {
        tempString += Array[i];
      }
    }
    return tempString;
  };
  //true,false 값을 반대로 전환시키는 메서드
  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };
   
  loginCkeck = () => {
    if(sessionStorage.getItem("user") != null){
     alert('찜목록 저장완료!');
    }
    else {
      alert('로그인 후 사용가능합니다. \n 👉👉👉로그인 페이지로 이동합니다👉👉👉');
      return(window.location.href ='/login');
    }
  };

  render() {
    return (
      <div>
        <div className="btn bg-transparent" onClick={this.toggle}>
          {/* {images} */}
          {(this.state.poster_image === 'http://image.tmdb.org/t/p/w500null') ?
          <img
            alt=""
            src={"https://i.ytimg.com/vi/GV3HUDMQ-F8/maxresdefault.jpg"}
            height="270"
            width="180"
            style={{margin: '5px'}}
          /> :
          <img
            src={this.state.poster_image}
            width="180px"
            alt="new"
            style={{ borderRadius: 5 }}
            onClick={this.getAllInfo}
          />
  }
        </div>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          size="lg"
          className="my-modal"
          style={{ maxWidth: '900px', width: '80%' }}
        >
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="vedio">
                  {this.state.key ? (
                    <iframe
                      title="Youtube Video Player"
                      className="video"
                      allowFullScreen
                      style={{
                        width: '100%',
                        height: '50vh',
                        margin: 0,
                        padding: 0,
                      }}
                      allow="autoplay"
                      src={this.state.key}
                    ></iframe>
                  ) : (
                    'Youtube영상이 없습니다'
                  )}

                  <div>
                    <h1 style={{ color: 'white' }}>
                      {this.state.details && this.state.details.title}
                    </h1>
                    <div style={{ flexDirection: 'row' }}>
                      <input
                        className="btn btn-light btn-lg"
                        type="button"
                        value="▶ 재생"
                        style={{ margin: 5 }}
                      />
                      <input
                        className="btn btn-light btn-lg"
                        type="button"
                        value="❤"
                        style={{ margin: 5, borderRadius: 20 }}
                        onClick={()=> this.loginCkeck(sessionStorage.getItem)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row" style={{ paddingLeft: '24px', marginTop: 15 }}>
              <div className="col-8">
                <div className="content1">
                  <p className="contentFont">
                    {this.state.details.release_date &&
                      this.state.details.release_date}{' '}
                    {this.state.details.runtime && this.state.details.runtime}분
                  </p>
                  <p className="contentFont" style={{ marginTop: 15 }}>
                    {this.state.details.overview
                      ? this.state.details.overview
                      : '줄거리 요약이 없습니다'}
                  </p>
                </div>
              </div>
              <div className="col-4">
                <div className="content2">
                  <div style={{ flexDirection: 'row', marginBottom: 10 }}>
                    <div style={{ textDecoration: 'none', color: '#777777' }}>
                      출연
                    </div>
                    <div className="detailFont">
                      {this.state.cast && this.seperactor(this.state.cast)}
                    </div>
                  </div>
                  <div style={{ flexDirection: 'row', marginBottom: 10 }}>
                    <div style={{ textDecoration: 'none', color: '#777777' }}>
                      장르
                    </div>
                    <div className="detailFont">
                      {this.state.genres && this.seperactor(this.state.genres)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row" style={{ paddingLeft: '24px', marginTop: 20 }}>
              <div className="col">
                <form className="form-inline" style={{ width: '100%' }}>
                  <textarea
                    placeholder="댓글을 입력해주세요"
                    className="form-control"
                    rows="2"
                    cols="100"
                  />
                  <button
                    type="submit"
                    className="btn btn-danger btn-lg"
                    style={{ margin: 10 }}
                  >
                    댓글
                  </button>
                </form>
                <div className="comment"></div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
};

export default DetailContentCompoent;
