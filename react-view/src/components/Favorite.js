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
        
        this.loadFavoriteMovie();
    }
    loadFavoriteMovie = async () => {
        await FavoriteMovieApiService.fetchMovies()
            .then(res => {
                console.log(res.data);
                // console.log('poster_path : ', res.data.movie_poster_path);
                this.setState({movies:res.data},()=>{
                    console.log(this.state.movies);
                })
                // setMovies([
                //     ...movies,
                //     {  movie_id: res.data.movie_id, movie_poster_path: res.data.movie_poster_path },
                // ]);
            });
    };
    render() {
        return (
            <section className='bg-color'>
            <div
            className='container-fluid'
            style={{background: '#181818', flex: 1, height: '2000px'}}
            >
                <div className='row'>
                    <div className='col'>
                        <h1 style={{color: 'white'}}>내가 찜한 목록</h1>
                        <div className='container-fluid'>
                            <div className='row'>
                                <div className='col'>
                                    {this.state.movies ? this.state.movies.map((item) => {
                                        return (
                                            <DetailContent id={item.id} movie={item}></DetailContent>
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
