import React, { Component } from "react";
import Fade from 'react-reveal';
// import Slider from 'react-slick';

//import ApiService from '../apis/ApiService';
import tmdbService from '../apis/tmdbService';
import Movie from "./Movie";

class MainPage extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            genre: ['28', '12', '35', '99', '10751', '14', '27'],
            //genre: ['Action', 'Adventure', 'Comedy', 'Documentary', 'Family', 'Fantasy', 'Horror'],
            // populars: [],

            result: {},
            actions: [],
            adventures: [],
            comedy: [],
            documentary: [],
            family: [],
            fantasy: [],
            horrors: [],
        }
    }

    // popularMovie() {
    //     tmdbService.getPopular()
    //         .then(res => {
    //             this.setState({ populars: res.data });
    //         })
    //         .catch(err => {
    //             console.error('popularMovie get 오류 : ', err);
    //             alert('인기영화 불러오기 오류');
    //         });
    // }

    async componentDidMount() {
        for (var i = 0; i < this.state.genre.length; i++) {
            //debugger;
            await tmdbService.getGenreList(this.state.genre[i])
                .then(res => {
                    //console.log(res.data.results);
                    switch (i) {
                        case 0: // 액션
                            this.setState({actions :res.data.results.slice(10)});
                            break;
                        case 1: // 어드벤처                    
                            this.setState({adventures :res.data.results.slice(10)});
                            break;
                        case 2: // 코미디
                            this.setState({comedy :res.data.results.slice(10)});
                            break;
                        case 3: // 다큐멘터리
                            this.setState({documentary :res.data.results.slice(10)});
                            break;
                        case 4: // 가족 영화
                            this.setState({family :res.data.results.slice(10)});
                            break;
                        case 5: // 판타지
                            this.setState({fantasy :res.data.results.slice(10)});
                            break;
                        case 6: // 호러
                            this.setState({horrors :res.data.results.slice(10)});
                            break;
                        default:
                            break;
                    }
                })
                .catch(err => {
                    console.error('getGenreList get 오류 : ', err);
                    alert('영화 장르 불러오기 오류');
                });
        }

    }

    render() {

        // const settings = {  // 영화 슬라이더 세팅
        //     dots: true,
        //     slidesToShow: 3,
        //     slidesToScroll: 3,
        //     infinite: true,
        //     speed: 500,
        //     // rows: 5,
        //     // slidesPerRow: 5
        // }

        return (
            <div style={{backgroundColor:'#181818'}}>
                <div className='row'>
                    <div className='col-12'>
                        <iframe
                        src='https://youtube.com/embed/UIA1QoGATHY'
                        title='Youtube Video Player'
                        className='video'
                        allowFullScreen
                        style={{width:'100%', height: '80vh'}}                  
                        />
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <button type="button" className="btn btn-light"
                            style={{ margin: 10 }}
                            children="▶ 재생" />
                        <button type="button" className="btn btn-secondary"
                            children="상세 정보" />
                    </div>
                </div>
                {/* <Fade bottom>
                    <div className='row'>
                        <div className='col'>
                            <h2 className='genrefont'>인기 영화</h2>
                            {this.state.populars.map((populars, index) => {
                                return <img key={index} src={'https://image.tmdb.org/t/p/w500' + populars.backdrop_path} width="190" alt='' />
                            })}
                        </div>
                    </div>
                </Fade> */}
                <Fade bottom>
                    <div className='row'>
                        <div className='col'>
                            <h2 className='genrefont'>액션</h2>
                            {/* <Slider {...settings}> */}
                                {this.state.actions.map((movie, index) => {
                                    console.log('data : ', movie);
                                    return <Movie key={index} src={'https://image.tmdb.org/t/p/w500' + movie.backdrop_path} movie={movie} width="190" alt='' />
                                })}
                            {/* </Slider> */}
                        </div>
                    </div>
                </Fade>
                <Fade bottom>
                    <div className='row'>
                        <div className='col'>
                            <h2 className='genrefont'>어드벤쳐</h2>
                            {this.state.adventures.map((movie, index) => {
                                return <img key={index} src={'https://image.tmdb.org/t/p/w500' + movie.backdrop_path} width="190" alt='' />
                            })}
                        </div>
                    </div>
                </Fade>
                <Fade bottom>
                    <div className='row'>
                        <div className='col'>
                            <h2 className='genrefont'>코미디</h2>
                            {this.state.comedy.map((movie, index) => {
                                return <img key={index} src={'https://image.tmdb.org/t/p/w500' + movie.backdrop_path} width="190" alt='' />
                            })}
                        </div>
                    </div>
                </Fade>
                <Fade bottom>
                    <div className='row'>
                        <div className='col'>
                            <h2 className='genrefont'>다큐멘터리</h2>
                            {this.state.documentary.map((movie, index) => {
                                return <img key={index} src={'https://image.tmdb.org/t/p/w500' + movie.backdrop_path} width="190" alt='' />
                            })}
                        </div>
                    </div>
                </Fade>
                <Fade bottom>
                    <div className='row'>
                        <div className='col'>
                            <h2 className='genrefont'>가족 영화</h2>
                            {this.state.family.map((movie, index) => {
                                return <img key={index} src={'https://image.tmdb.org/t/p/w500' + movie.backdrop_path} width="190" alt='' />
                            })}
                        </div>
                    </div>
                </Fade>
                <Fade bottom>
                    <div className='row'>
                        <div className='col'>
                            <h2 className='genrefont'>판타지</h2>
                            {this.state.fantasy.map((movie, index) => {
                                return <img key={index} src={'https://image.tmdb.org/t/p/w500' + movie.backdrop_path} width="190" alt='' />
                            })}
                        </div>
                    </div>
                </Fade>
                <Fade bottom>
                    <div className='row'>
                        <div className='col'>
                            <h2 className='genrefont'>공포</h2>
                            {this.state.horrors.map((movie, index) => {
                                return <img key={index} src={'https://image.tmdb.org/t/p/w500' + movie.backdrop_path} width="190" alt='' />
                            })}
                        </div>
                    </div>
                </Fade>
            </div>
        );
    }

}


export default MainPage;