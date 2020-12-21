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
        //로그인 세션이 있을때 그 유저아이디에따라 this.loadFavoriteMovie()함수 실행시키기
        this.loadFavoriteMovie();
    }
    loadFavoriteMovie = async () => {
        this.setState({movies:''})
        console.log('유저이메일 : ', this.state.user_id);

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
                        <h1 style={{color: 'white'}}>내가 찜한 목록</h1>
                        <div className='container-fluid'>
                            <div className='row'>
                                {/* <div className='col'> */}
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
                                {/* </div> */}
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
