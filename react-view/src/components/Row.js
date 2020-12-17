import React, { useState } from 'react';
import Slider from 'react-slick';
import Fade from 'react-reveal';
import DetailContent from './DetailContent';

const Row = ({ actions, comedys, horrors }) => {
  const [youtube, setYoutube] = useState([]);
  //   console.log("props의 액션값:", actions);
  //   console.log("props의 코미디값:", comedys);
  console.log('props의 호러값:', horrors);
  const slideSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    pauseOnHover: true,
  };
  return (
    <div>
      <h3 style={{ color: 'white', fontWeight: 'bold' }}>호러</h3>
      <div className="row">
        {/* <Slider {...slideSettings}> */}
        {horrors
          ? horrors.slice(0, 8).map((item) => {
              return <DetailContent id={item.id} movie={item}></DetailContent>;
            })
          : ''}
        {/* </Slider> */}
      </div>
      <Fade bottom>
        <h3 style={{ color: 'white', fontWeight: 'bold' }}>코미디</h3>
        <div className="row">
          {comedys
            ? comedys.slice(0, 8).map((item) => {
                return (
                  <DetailContent id={item.id} movie={item}></DetailContent>
                );
              })
            : ''}
        </div>
      </Fade>
      <Fade bottom>
        <h3 style={{ color: 'white', fontWeight: 'bold' }}>액션</h3>
        <div className="row">
          {actions
            ? actions.slice(0, 8).map((item) => {
                return (
                  <DetailContent id={item.id} movie={item}></DetailContent>
                );
              })
            : ''}
          {youtube}
        </div>
      </Fade>
    </div>
  );
};

export default Row;
