import React from "react";
import Row from './Row';

const MainPage = () => {

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
                    <Row />
                </div>
            </div>
        </div>
    );

}


export default MainPage;