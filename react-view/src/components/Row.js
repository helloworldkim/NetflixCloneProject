import React from 'react';
import Slider from "react-slick";
import Fade from 'react-reveal';

const Row = () => {

    const items = [
        { index: 1, genre_id: 1, genre: '로맨스', title: '오싹한 연애1', imgSource: 'https://images.chosun.com/resizer/iqhR82qh6ii4IaIlGWs6m9S2_sg=/464x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/4CZGF5M2YKVDYYS6CJFGIADLAY.jpg' },
        { index: 2, genre_id: 1, genre: '로맨스', title: '오싹한 연애2', imgSource: 'https://images.chosun.com/resizer/iqhR82qh6ii4IaIlGWs6m9S2_sg=/464x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/4CZGF5M2YKVDYYS6CJFGIADLAY.jpg' },
        { index: 3, genre_id: 1, genre: '로맨스', title: '오싹한 연애3', imgSource: 'https://images.chosun.com/resizer/iqhR82qh6ii4IaIlGWs6m9S2_sg=/464x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/4CZGF5M2YKVDYYS6CJFGIADLAY.jpg' },
        { index: 4, genre_id: 1, genre: '로맨스', title: '오싹한 연애4', imgSource: 'https://images.chosun.com/resizer/iqhR82qh6ii4IaIlGWs6m9S2_sg=/464x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/4CZGF5M2YKVDYYS6CJFGIADLAY.jpg' },
        { index: 5, genre_id: 1, genre: '로맨스', title: '오싹한 연애5', imgSource: 'https://images.chosun.com/resizer/iqhR82qh6ii4IaIlGWs6m9S2_sg=/464x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/4CZGF5M2YKVDYYS6CJFGIADLAY.jpg' },
        { index: 6, genre_id: 1, genre: '로맨스', title: '오싹한 연애6', imgSource: 'https://images.chosun.com/resizer/iqhR82qh6ii4IaIlGWs6m9S2_sg=/464x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/4CZGF5M2YKVDYYS6CJFGIADLAY.jpg' },
        { index: 7, genre_id: 2, genre: '코미디', title: '신혼여행 허리케인', imgSource: 'http://www.topdaily.kr/news/photo/202007/71530_38506_3231.jpg' },
        { index: 8, genre_id: 2, genre: '코미디', title: '신혼여행 허리케인', imgSource: 'http://www.topdaily.kr/news/photo/202007/71530_38506_3231.jpg' },
        { index: 9, genre_id: 2, genre: '코미디', title: '신혼여행 허리케인', imgSource: 'http://www.topdaily.kr/news/photo/202007/71530_38506_3231.jpg' },
        { index: 10, genre_id: 2, genre: '코미디', title: '신혼여행 허리케인', imgSource: 'http://www.topdaily.kr/news/photo/202007/71530_38506_3231.jpg' },
        { index: 11, genre_id: 2, genre: '코미디', title: '신혼여행 허리케인', imgSource: 'http://www.topdaily.kr/news/photo/202007/71530_38506_3231.jpg' },
        { index: 12, genre_id: 2, genre: '코미디', title: '신혼여행 허리케인', imgSource: 'http://www.topdaily.kr/news/photo/202007/71530_38506_3231.jpg' },
        { index: 13, genre_id: 3, genre: '액션', title: '미션 임파서블 3', imgSource: 'https://upload.wikimedia.org/wikipedia/ko/thumb/b/be/%EB%AF%B8%EC%85%98%EC%9E%84%ED%8C%8C%EC%84%9C%EB%B8%943_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg/220px-%EB%AF%B8%EC%85%98%EC%9E%84%ED%8C%8C%EC%84%9C%EB%B8%943_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg' },
        { index: 14, genre_id: 3, genre: '액션', title: '미션 임파서블 3', imgSource: 'https://upload.wikimedia.org/wikipedia/ko/thumb/b/be/%EB%AF%B8%EC%85%98%EC%9E%84%ED%8C%8C%EC%84%9C%EB%B8%943_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg/220px-%EB%AF%B8%EC%85%98%EC%9E%84%ED%8C%8C%EC%84%9C%EB%B8%943_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg' },
        { index: 15, genre_id: 3, genre: '액션', title: '미션 임파서블 3', imgSource: 'https://upload.wikimedia.org/wikipedia/ko/thumb/b/be/%EB%AF%B8%EC%85%98%EC%9E%84%ED%8C%8C%EC%84%9C%EB%B8%943_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg/220px-%EB%AF%B8%EC%85%98%EC%9E%84%ED%8C%8C%EC%84%9C%EB%B8%943_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg' },
        { index: 16, genre_id: 3, genre: '액션', title: '미션 임파서블 3', imgSource: 'https://upload.wikimedia.org/wikipedia/ko/thumb/b/be/%EB%AF%B8%EC%85%98%EC%9E%84%ED%8C%8C%EC%84%9C%EB%B8%943_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg/220px-%EB%AF%B8%EC%85%98%EC%9E%84%ED%8C%8C%EC%84%9C%EB%B8%943_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg' },
        { index: 17, genre_id: 3, genre: '액션', title: '미션 임파서블 3', imgSource: 'https://upload.wikimedia.org/wikipedia/ko/thumb/b/be/%EB%AF%B8%EC%85%98%EC%9E%84%ED%8C%8C%EC%84%9C%EB%B8%943_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg/220px-%EB%AF%B8%EC%85%98%EC%9E%84%ED%8C%8C%EC%84%9C%EB%B8%943_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg' },
        { index: 18, genre_id: 3, genre: '액션', title: '미션 임파서블 3', imgSource: 'https://upload.wikimedia.org/wikipedia/ko/thumb/b/be/%EB%AF%B8%EC%85%98%EC%9E%84%ED%8C%8C%EC%84%9C%EB%B8%943_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg/220px-%EB%AF%B8%EC%85%98%EC%9E%84%ED%8C%8C%EC%84%9C%EB%B8%943_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg' },
    ];

    const slideSettings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        pauseOnHover: true
    };

    const romanceMovies = items.filter(item => item.genre_id === 1);
    const romanceResult = romanceMovies.map((item, index) => 
            <Slider {...slideSettings}>
                <div>
                    <img src={item.imgSource} width='180px' alt={item.title}  style={{margin:'5px'}}  />
                </div>
            </Slider>
    );

    const comedyMovies = items.filter(item => item.genre_id === 2);
    const comedyResult = comedyMovies.map((item, index) => 
                <img src={item.imgSource} width='180px' alt={item.title}  style={{margin:'5px'}}  />                
    );

    const actionMovies = items.filter(item => item.genre_id === 3);
    const actionResult = actionMovies.map((item, index) => 
                <img src={item.imgSource} width='180px' alt={item.title}  style={{margin:'5px'}}  />                
    );
   
    return (
        <div>
            <h3 style={{color: 'white', fontWeight: 'bold'}}>{romanceMovies[0].genre}</h3>
                <div className="row">
                    {/* <Slider {...slideSettings}> */}
                        {romanceResult}
                    {/* </Slider> */}
                </div>
            <Fade bottom>
                <h3 style={{color: 'white', fontWeight: 'bold'}}>{comedyMovies[0].genre}</h3>
                <div className="row">
                    {comedyResult}
                </div>
            </Fade>
            <Fade bottom>
                <h3 style={{color: 'white', fontWeight: 'bold'}}>{actionMovies[0].genre}</h3>
                <div className="row">
                    {actionResult}
                </div>
            </Fade>
        </div>
    );

}

export default Row;
