package com.example.controller.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.mapper.user.UserMapper;
import com.example.vo.user.UserVO;

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
	int login(@RequestBody UserVO user, HttpSession httpSession) {
		int cnt = mapper.getUser(user);

		if (cnt == 1) {
			httpSession.setAttribute("USERID_SESSION", user.getEmail());
		}

		return cnt;
	}

	@PostMapping("/logout")
	void logout(HttpSession httpSession) {
		httpSession.invalidate();
	}
}