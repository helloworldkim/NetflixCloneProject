package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.mapper.NetflixCloneMapper;
import com.example.vo.NetflixCloneVO;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/mylist")

public class NetflixCloneController {
	
	@Autowired
	NetflixCloneMapper mapper;
	
	@GetMapping("/{user_id}")
	public List<NetflixCloneVO> fetchMovie(@PathVariable Long user_id) {
		System.out.println(user_id);
//		System.out.println(mapper.fetchMovie(item.getUser_email()));
		return mapper.fetchMovie(user_id);
	}
	
//	@GetMapping("/{movie_id}")
//	public void isMovie(Long movie_id) {
//		System.out.println("무비아이디 확인=> " + movie_id);
//		mapper.isMovie(movie_id);
//	}	

//	@GetMapping
//	public List<NetflixCloneVO> fetchMovie(@PathVariable String user_email) {
//		System.out.println("찜한목록볼 유저 이메일 => " + user_email);
//		return mapper.fetchMovie(user_email);
//	}
	
	@PostMapping
	public String addMovie(@RequestBody NetflixCloneVO item) {
		System.out.println(item.getUser_id());
		System.out.println(item.getMovie_id());
//		System.out.println(item.getUser_email());
		int cnt = mapper.isMovie(item.getMovie_id(),item.getUser_id());
		if(cnt == 0) {
			mapper.addMovie(item);
			System.out.println("즐겨찾기 저장");
			return "success";
		} else {
			return "fail";
		}
	}
	
//	@DeleteMapping("/{id}")
//	public void removeMovie(@PathVariable Long id) {
//		System.out.println("삭제 즐겨찾기 아이디 => " + id);
//		mapper.removeMovie(id);
//		System.out.println("즐겨찾기 삭제!");
//	}
	
	@DeleteMapping("/{movie_id}")
	public String removeMovie2(@PathVariable Long movie_id) {
		System.out.println("삭제 즐겨찾기 아이디2 => " + movie_id);
		int cnt = mapper.isMovie2(movie_id);
		if(cnt == 1) {
			mapper.removeMovie2(movie_id);
			System.out.println("즐겨찾기 삭제2!");
			return "success";
		} else {
			return "fail";
		}
	}
	
}
