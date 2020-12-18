package com.example.controller.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.mapper.user.UserMapper;
import com.example.vo.user.UserVO;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpSession;

@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	UserMapper mapper;

	@PostMapping
	void registerUser(@RequestBody UserVO user) {
		mapper.insertUser(user);
	}

	@GetMapping
	int isUser(@RequestParam("id") String id) {
		int cnt = mapper.isUser(id);
		System.out.println(cnt);
		return cnt;
	}

	@PostMapping("/login")
	Map<String,Object> login(@RequestBody UserVO user, HttpSession httpSession) {
		System.out.println(user.toString());
		int cnt = mapper.getUser(user);
		Map<String,Object> myuser= new HashMap<>();
		if (cnt == 1) {
			myuser= mapper.getUserInfo(user);
			System.out.println(myuser.toString());
			httpSession.setAttribute("USERID_SESSION", user.getEmail());
		}
		return myuser;
	}

	@GetMapping("/logout")
	String logout(HttpSession httpSession) {
		System.out.println("로그아웃함");
		httpSession.invalidate();
		return "로그아웃";
	}
}