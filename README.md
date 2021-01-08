# Netflix Project

Netfilx 에서 제공하는 환경처럼 구성하고 영화의 리스트 재생모습 회원으로 이용가능한 서비스를 제공하는 홈페이지를 제작하는 프로젝트입니다.
Create-react-app을 이용해서 Frontend를 구성하였고, SpringBoot를 사용해서 Backend를 구현했습니다.

#react 노드 모듈 설치
Project실행 전 react-view폴더에서 node 모듈을 받기위해선 yarn install 필수적으로 필요합니다.

```
  yarn install
```
---------------------------------
##구현된 기능들
>비회원 기능
>>메인 슬라이드
![메인](https://user-images.githubusercontent.com/68931285/104016936-934e7b00-51fa-11eb-9e7e-430c38c24acd.png)


1.TMDB에서 제공하는 API를 사용한 영화 리스트 보여주기 및 해당 영화의 데이터 표시
2.영화의 트레일러 영상(유튜브) 보기
![디테일](https://user-images.githubusercontent.com/68931285/104017017-b1b47680-51fa-11eb-8b22-04afd3c02df1.png)
3.원하는 영화 검색기능
![검색리스트](https://user-images.githubusercontent.com/68931285/104016939-93e71180-51fa-11eb-9dcf-251c536a9ffe.png)
4.해당 리스트 페이징기능
![리스트페이징](https://user-images.githubusercontent.com/68931285/104016943-947fa800-51fa-11eb-8bdf-c450e5760032.png)
5.회원가입

------------
>회원 기능

1.원하는 영화 찜(저장,삭제)
2.해당 영화에 대한 댓글작성(작성,삭제)

------------
>기타

1. 페이스북으로 로그인(Oauth라이브러리 없이 구현되어있음)
![로그인](https://user-images.githubusercontent.com/68931285/104016942-947fa800-51fa-11eb-9b67-b2daa2ad88f1.png)

