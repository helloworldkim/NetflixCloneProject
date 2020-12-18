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
import org.springframework.web.bind.annotation.RestController;

import com.example.mapper.NetflixCloneMapper;
import com.example.vo.NetflixCloneVO;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/mylist")

public class NetflixCloneController {
	
	@Autowired
	NetflixCloneMapper mapper;
	
	@GetMapping
	public List<NetflixCloneVO> fetchMovie() {
		System.out.println(mapper.fetchMovie());
		return mapper.fetchMovie();
	}
	
//	@GetMapping
//	public List<NetflixCloneVO> fetchMovie(@PathVariable String user_email) {
//		System.out.println("찜한목록볼 유저 이메일 => " + user_email);
//		return mapper.fetchMovie(user_email);
//	}
	
	@PostMapping
	public void addMovie(@RequestBody NetflixCloneVO item) {
		mapper.addMovie(item);
		System.out.println("즐겨찾기 저장");
	}
	
	@DeleteMapping("/{id}")
	public void removeMovie(@PathVariable Long id) {
		System.out.println("삭제 즐겨찾기 아이디 => " + id);
		mapper.removeMovie(id);
		System.out.println("즐겨찾기 삭제!");
	}
}
