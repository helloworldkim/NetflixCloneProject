import React, { Component } from 'react';
import DetailContent from './DetailContent';
import '../styles/Detail.css';
import FavoriteMovieApiService from '../apis/FavoriteMovieApiService';


class Favorite extends Component {
    constructor(props) {
        super(props);
        this.state={
            user_id : window.sessionStorage.getItem("user"),
        }
    }
    
    componentDidMount(){
        this.loadFavoriteMovie();
    }
    //유저아이디에따라 this.loadFavoriteMovie()함수 실행시키기
    loadFavoriteMovie = async () => {
        //삭제하고나서 남은목록의영화데이터를 지워주고(지운영화의 이미지가 남아있고 새로고침해야지 정상작동하는 오류때문에) 밑에서 다시불러옴
        this.setState({movies:''})
        console.log('유저아이디 : ', this.state.user_id);

        await FavoriteMovieApiService.fetchMovie(this.state.user_id)
            .then(res => {
                console.log(res.data);
                this.setState({movies:res.data},()=>{
                    console.log(this.state.movies);
                })
                
            });

        };

    render() {
        return (
            <section className='bg-color'>
            <div
            className='container-fluid'
            style={{background: '#181818', flex: 1}}
            >
                <div className='row'>
                    <div className='col'>
                        <div className="container-fluid" style={{backgroundColor: '#181818'}}>
                            <div className="container">
                                <h3 style={{color: 'white', fontWeight: 'bold', marginBottom: 20}}>내가 찜한 목록</h3>
                                <div className="row">
                                    {this.state.movies ? this.state.movies.map((item) => {
                                        return (
                                            <DetailContent
                                                user_id={this.state.user_id}
                                                databaseid={item.id}
                                                id={item.movie_id}
                                                movie={item}
                                                loadFavoriteMovie={this.loadFavoriteMovie}
                                            ></DetailContent>
                                        );                                
                                        })
                                    :''}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}

export default Favorite;
