import React, { useState } from 'react';
import Fade from 'react-reveal';
import Slider from "react-slick";
import DetailContent from './DetailContent';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Row = ({
  actions,
  adventures,
  comedys,
  documentarys,
  familys,
  fantasys,
  horrors,
}) => {
  //   console.log("props의 액션값:", actions);
  //   console.log("props의 adventures:", adventures);
  // console.log('props의 comedys:', comedys);
  // console.log('props의 documentarys:', documentarys);
  // console.log('props의 familys:', familys);
  // console.log('props의 fantasys:', fantasys);
  // console.log('props의 horrors:', horrors);

  const settings = {  // Slider settings
    className : "slider variable-width",
    dots : false,
    infinite : true,
    centerMode : true,
    slidesToShow : 1,
    slidesToScroll : 1,
    variableWidth : true,
  };
  return (
    <div>
      <Fade bottom>
        <h3 className='titleFont'>액션</h3>
        <div className="row">
          <div className='col'>
            <Slider {...settings}>
              {actions
                ? actions.map((item) => {
                    return (
                      <div className='slick'>
                        <DetailContent id={item.id} movie={item}></DetailContent>
                      </div>
                    );
                  })
                : ''}
            </Slider>
          </div>
        </div>
      </Fade>
      <Fade bottom>
        <h3 className='titleFont'>어드벤쳐</h3>
        <div className="row">
          <div className='col'>
            <Slider {...settings}>
              {adventures
                ? adventures.map((item) => {
                    return (
                      <div className='slick'>
                        <DetailContent id={item.id} movie={item}></DetailContent>
                      </div>
                    );
                  })
                : ''}
            </Slider>
          </div>
        </div>
      </Fade>
      <Fade bottom>
        <h3 className='titleFont'>코미디</h3>
        <div className="row">
          <div className='col'>
            <Slider {...settings}>
              {comedys
                ? comedys.map((item) => {
                    return (
                      <div className='slick'>
                        <DetailContent id={item.id} movie={item}></DetailContent>
                      </div>
                    );
                  })
                : ''}
              </Slider>
            </div>
        </div>
      </Fade>
      <Fade bottom>
        <h3 className='titleFont'>다큐멘터리</h3>
        <div className="row">
          <div className='col'>
            <Slider {...settings}>
              {documentarys
                ? documentarys.map((item) => {
                    return (
                      <div className='slick'>
                        <DetailContent id={item.id} movie={item}></DetailContent>
                      </div>
                    );
                  })
                : ''}
              </Slider>
            </div>
        </div>
      </Fade>
      <Fade bottom>
        <h3 className='titleFont'>가족영화</h3>
        <div className="row">
          <div className='col'>
            <Slider {...settings}>
              {familys
                ? familys.map((item) => {
                    return (
                      <div className='slick'>
                        <DetailContent id={item.id} movie={item}></DetailContent>
                      </div>
                    );
                  })
                : ''}
              </Slider>
          </div>
        </div>
      </Fade>
      <Fade bottom>
        <h3 className='titleFont'>판타지</h3>
        <div className="row">
          <div className='col'>
            <Slider {...settings}>
              {fantasys
                ? fantasys.map((item) => {
                    return (
                      <div className='slick'>
                        <DetailContent id={item.id} movie={item}></DetailContent>
                      </div>
                    );
                  })
                : ''}
              </Slider>
            </div>
        </div>
      </Fade>
      <Fade bottom>
        <h3 className='titleFont'>호러</h3>
        <div className="row">
          <div className='col'>
            <Slider {...settings}>
              {horrors
                ? horrors.map((item) => {
                    return (
                      <div className='slick'>
                        <DetailContent id={item.id} movie={item}></DetailContent>
                      </div>
                    );
                  })
                : ''}
              </Slider>
            </div>
        </div>
      </Fade>
    </div>
  );
};
export default Row;
