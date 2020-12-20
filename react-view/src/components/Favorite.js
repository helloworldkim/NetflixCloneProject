import React, { Component } from 'react';
import DetailContent from './DetailContent';
import '../styles/Detail.css';
import FavoriteMovieApiService from '../apis/FavoriteMovieApiService';


class Favorite extends Component {
    constructor(props) {
        super(props);
        this.state={
        }
    }
    componentDidMount(){
        //로그인 세션이 있을때 그 유저아이디에따라 this.loadFavoriteMovie()함수 실행시키기
        this.loadFavoriteMovie();
    }
    loadFavoriteMovie = async () => {
        await FavoriteMovieApiService.fetchMovie()
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
