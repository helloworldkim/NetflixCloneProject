import React, { Component, useState } from "react";

import ApiService from '../apis/ApiService';

class MainPage extends Component {
    handleGenre = async (i, genre) => {
        await ApiService.genreMovie(i, genre)
            .then(res => {
                if(genre === 'Action' && 'Adventure') {
                    
                }
                if(genre === 'Comedy') {

                }
                if(genre === 'Documentary') {

                }
                if(genre === 'Family') {

                }
                if(genre === 'Fantasy') {

                }
                if(genre === 'Horror') {

                }
            })
            .catch(err => {
                console.error('genreMovie get 오류 : ', err);
                alert('영화 장르 불러오기 오류');
            });
    }

//    selectGenre = () => {
        //genres.name(장르), orininal_title(제목), overview(설명), release_date(개봉년월일), runtime

 //   }

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