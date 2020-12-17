import React, { useState } from 'react';
import Slider from 'react-slick';
import Fade from 'react-reveal';
import DetailContent from './DetailContent';

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

  // const slideSettings = {
  //   dots: true,
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 3,
  //   pauseOnHover: true,
  // };
  return (
    <div>
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
        </div>
      </Fade>
      <Fade bottom>
        <h3 style={{ color: 'white', fontWeight: 'bold' }}>어드벤쳐</h3>
        <div className="row">
          {adventures
            ? adventures.slice(0, 8).map((item) => {
                return (
                  <DetailContent id={item.id} movie={item}></DetailContent>
                );
              })
            : ''}
        </div>
      </Fade>
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
        <h3 style={{ color: 'white', fontWeight: 'bold' }}>다큐멘터리</h3>
        <div className="row">
          {documentarys
            ? documentarys.slice(0, 8).map((item) => {
                return (
                  <DetailContent id={item.id} movie={item}></DetailContent>
                );
              })
            : ''}
        </div>
      </Fade>
      <Fade bottom>
        <h3 style={{ color: 'white', fontWeight: 'bold' }}>가족영화</h3>
        <div className="row">
          {familys
            ? familys.slice(0, 8).map((item) => {
                return (
                  <DetailContent id={item.id} movie={item}></DetailContent>
                );
              })
            : ''}
        </div>
      </Fade>
      <Fade bottom>
        <h3 style={{ color: 'white', fontWeight: 'bold' }}>판타지</h3>
        <div className="row">
          {fantasys
            ? fantasys.slice(0, 8).map((item) => {
                return (
                  <DetailContent id={item.id} movie={item}></DetailContent>
                );
              })
            : ''}
        </div>
      </Fade>
      <Fade bottom>
        <h3 style={{ color: 'white', fontWeight: 'bold' }}>호러</h3>
        <div className="row">
          {horrors
            ? horrors.slice(0, 8).map((item) => {
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
export default Row;
