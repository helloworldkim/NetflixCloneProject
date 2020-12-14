import React from 'react';
import Favorite from './Favorite';

const Save = () => {
    return(
        <div
          className='container-fluid'
          style={{backgroundColor: '#181818', flex: 1, height: '2000px'}}
          >
          <div className='row'>
            <div className='col'>
                <h1 style={{color: 'white'}}>내가 찜한 목록</h1>
              <Favorite />
            </div>
          </div>
        </div>
    );
}

export default Save;
