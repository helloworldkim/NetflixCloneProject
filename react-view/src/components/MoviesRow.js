import React, { useState } from 'react';
import Fade from 'react-reveal';
import DetailContent from './DetailContent';
import Pagenation from './Pagenation';

const MoviesRow = ({ movies, totalpage, page, totalresults, pageHandler }) => {
  console.log('props의 movies:', movies);
  return (
    <div>
      <Fade bottom>
        <div className="row">
          <div className="col">
            <h3 style={{ color: 'white', fontWeight: 'bold' }}>영화 리스트</h3>
          </div>
          <div className="col">
            <Pagenation
              totalpage={totalpage}
              page={page}
              totalresults={totalresults}
              pageHandler={pageHandler}
            />
          </div>
        </div>

        <div className="row">
          {movies
            ? movies.map((item) => {
                return (
                  <DetailContent id={item.id} movie={item}></DetailContent>
                );
              })
            : ''}
        </div>
      </Fade>
    </div>
  );
};
export default MoviesRow;
