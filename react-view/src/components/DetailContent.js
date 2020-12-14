import React, { useState } from 'react';
import {Modal} from 'reactstrap';

const DetailContent = (props) => {
    // in : youtube 동영상, 영화제목, 개봉연도, 러닝타임, 줄거리, 출연, 장르, 영화 특징, 댓글, 비슷한 콘텐츠, (찜)
    // out : 댓글, 찜
    const {
        title='프리키 데스데이',
    } = props;
    
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <a className='btn bg-transparent' onClick={toggle}>
                {/* {images} */}
                <img src={'https://img.movist.com/?img=/x00/05/38/94_p1.jpg'} width='180px' alt='new' style={{borderRadius: 5}}/>
            </a>
            <Modal isOpen={modal} toggle={toggle} size='lg' className='my-modal' style={{maxWidth: '900px', width: '80%'}}>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <div className='vedio'>
                                <iframe title='Youtube Video Player'
                                        className='video'
                                        allowFullScreen
                                        style={{width: '100%', height: '50vh', margin: 0, padding: 0}}
                                        src='https://youtube.com/embed/EmVhvlIgxfU'>
                                </iframe>
                                <div>
                                    <h1 style={{color: 'white'}}>{title}</h1>
                                    <div style={{flexDirection: 'row'}}>
                                        <input className='btn btn-light btn-lg' type='button' value='▶ 재생' style={{margin:5}}/>
                                        <input className='btn btn-light btn-lg' type='button' value='❤' style={{margin:5, borderRadius: 20}}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row' style={{paddingLeft: '24px', marginTop: 15}}>
                        <div className='col-8'>
                            <div className='content1'>
                                <p className='contentFont'>개봉연도 러닝타임</p>
                                <p className='contentFont' style={{marginTop: 15}}>줄거리</p>
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='content2'>
                                <div style={{flexDirection: 'row', marginBottom: 10}}>
                                    <a style={{textDecoration: 'none', color: '#777777'}}>출연</a>{'  '}
                                    <a className='detailFont'>황감자</a>
                                </div>
                                <div style={{flexDirection: 'row', marginBottom: 10}}>
                                    <a style={{textDecoration: 'none', color: '#777777'}}>장르</a>{'  '}
                                    <a className='detailFont'>황감자</a>
                                </div>
                                <div style={{flexDirection: 'row', marginBottom: 10}}>
                                    <a style={{textDecoration: 'none', color: '#777777'}}>영화 특징</a>{'  '}
                                    <a className='detailFont'>황감자</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row' style={{paddingLeft: '24px', marginTop: 20}}>
                        <div className='col'>
                            <form className='form-inline' style={{width: '100%'}}>
                                <textarea placeholder='댓글을 입력해주세요' className='form-control' rows='2' cols='100'/>
                                <button type='submit' className='btn btn-danger btn-lg' style={{margin: 10}}>댓글</button> 
                            </form>
                            <div className='comment'>
                            </div>
                        </div>
                    </div>
                    <div className='row' style={{paddingLeft: '24px', marginTop: 15}}>
                        <div className='col'>
                            <div className='similar' style={{marginTop: 20}}>
                                <p className='sfont'>비슷한 콘텐츠</p>
                            </div>
                        </div>
                    </div>
                    <div className='row' style={{marginBottom: 20, paddingLeft: '24px'}}>
                        <div className='col'>
                            <div className='similar'>
                                <img src={'https://img.movist.com/?img=/x00/05/38/94_p1.jpg'} width='180px' alt='new' style={{marginRight: 10, borderRadius: 7}}/>
                                <img src={'https://img.movist.com/?img=/x00/05/38/94_p1.jpg'} width='180px' alt='new' style={{marginRight: 10, borderRadius: 7}}/>
                            </div>
                        </div>
                    </div>
                </div>
                                
            </Modal>
        </div>
    );

}

export default DetailContent;
