import React from 'react';

import DetailContent from './DetailContent';
import '../styles/Detail.css';

const Favorite = () => {
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
                                    <DetailContent />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Favorite;
