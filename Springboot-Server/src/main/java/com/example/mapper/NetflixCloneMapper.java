package com.example.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.vo.NetflixCloneVO;

@Mapper
public interface NetflixCloneMapper {
	
	List<NetflixCloneVO> fetchMovie(Long user_id);	
//	List<NetflixCloneVO> fetchMovie();	//즐겨찾기 모두 가져오기
	void addMovie(NetflixCloneVO netflix);	//즐겨찾기 추가
	void removeMovie(Long id);	//즐겨찾기 삭제
	void removeMovie2(Long movie_id);	//내가찜한컨텐츠목록말고 다른화면에서 삭제하기
	int isMovie(Long movie_id, Long user_id);	//찜 목록에 있는지 확인
	int isMovie2(Long movie_id);
}
