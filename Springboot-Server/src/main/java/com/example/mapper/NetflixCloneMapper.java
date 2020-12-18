package com.example.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.vo.NetflixCloneVO;

@Mapper
public interface NetflixCloneMapper {
	
//	List<NetflixCloneVO> fetchMovie(String user_email);	
	List<NetflixCloneVO> fetchMovie();	//즐겨찾기 모두 가져오기
	void addMovie(NetflixCloneVO netflix);	//즐겨찾기 추가
	void removeMovie(Long id);	//즐겨찾기 삭제
}
