import React, { Component, useState } from "react";

import ApiService from '../apis/ApiService';

class MainPage extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            genre: ['Action', 'Adventure', 'Comedy', 'Documentary', 'Family', 'Fantasy', 'Horror'],
            result: {},
        }
    }
    
    async handleGenre(i, genre) {
        await ApiService.genreMovie(i, genre)
        .then(res => {
                this.setState({ result: res.results }); 
                console.log("TEST1");
            })
        .catch(err => {
                console.error('genreMovie get 오류 : ', err);
                alert('영화 장르 불러오기 오류');
                return;
            });
    }

    handlePopular(i) {
        ApiService.popularMovie(i)
            .then(res => {
                console.log('인기영화 불러오기 성공!');
            })
            .catch(err => {
                console.error('handlePopular 오류:', err);
                alert('인기영화를 불러오지 못했습니다. \n 관리자에게 문의하세요!');
            });
    }

    handleVideo(id) {
        ApiService.videoMovie(id)
            .then(res => {
                console.log('인기영화 불러오기 성공!');
            })
            .catch(err => {
                console.error('handleVideo 오류:',err);
                alert('동영상을 불러오지 못했습니다. \n 관리자에게 문의하세요!');
            });
    }

//    selectGenre = () => {
        //genres.name(장르), orininal_title(제목), overview(설명), release_date(개봉년월일), runtime

 //   }

    componentDidMount() {
        for (var i= 0; i < this.state.genre.length; i++) {
            //console.log(this.state.genre[i]);
            // handleGenre
            //debugger;
            this.handleGenre(1, this.state.genre[i]);
   
        }
        this.handlePopular(1);

    }



    render() {
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
                <div className='row'>
                    <div className='col'>
                        <a href='#'>{}</a>
                    </div>
                </div>
            </div>
        );
    }

}


export default MainPage;