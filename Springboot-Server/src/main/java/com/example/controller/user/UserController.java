package com.example.controller.user;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

import com.example.mapper.user.UserMapper;
import com.example.vo.user.UserVO;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

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
	
	//user/auth/facebook
	//facebook 등록된 redirect url 주소 http://localhost:8090/user/auth/facebook
	//기본 접속주소가 connect/facebook
//뷰단에서 요청하는 주소           "https://www.facebook.com/v2.11/dialog/oauth?client_id=770894283636482&redirect_uri=http://localhost:8090/user/auth/facebook"
	@GetMapping("/auth/facebook")
	String oauthFacebookLogin(@RequestParam(value="code") String code,
			HttpSession httpSession,
			HttpServletResponse httpServletResponse,
			HttpServletRequest  httpServletRequest) throws IOException, ServletException {
		System.out.println("리디렉주소");
		//제대로 정보입력해서 로그인 후 권한체크 되어있으면 redirect주소로 돌아와서 코드값을 받는다.
		System.out.println("전달받은 코드값");
		System.out.println(code);
		String url ="https://graph.facebook.com/v2.11/oauth/access_token";
//		https://graph.facebook.com/v2.11/oauth/access_token?
//			client_id={app-id}
//			&redirect_uri={redirect-uri}
//			&client_secret={app-secret}
//			&code={code-parameter}
		RestTemplate rt = new RestTemplate();
		UriComponents builder = UriComponentsBuilder.fromHttpUrl(url)
				.queryParam("client_id", "770894283636482")
				.queryParam("client_secret", "c4edaaf3361de6a42e2a9a8dace495af")
				.queryParam("redirect_uri", "http://localhost:8090/user/auth/facebook")
				.queryParam("code", code)
				.build(false); 
		String uri = builder.toUriString();
		System.out.println(uri);
		ResponseEntity<String> response = rt.exchange(
				uri,
				HttpMethod.GET,
				null,
				String.class);
		System.out.println("응답데이터의 바디데이터");
		System.out.println(response.getBody());
		ObjectMapper objectMapper = new ObjectMapper();
		OAuthToken oauthToken=null;
		try {
			//데이터 받을때 객체내 변수명이 안맞으면 오류나서 try catch문을 사용해야함
			oauthToken = objectMapper.readValue(response.getBody(), OAuthToken.class);
		} catch (JsonMappingException e) {
			e.printStackTrace();
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		System.out.println("facebook 엑세스 토큰"+oauthToken.getAccess_token());
		String access_token = oauthToken.getAccess_token();
		//토큰으로 유저정보 받아오기
//		https://graph.facebook.com/me?
//		    fields={user-info-fields}&
//		    access_token={access-token}
		String url2 ="https://graph.facebook.com/me";
		RestTemplate rt2 = new RestTemplate();
		UriComponents builder2 = UriComponentsBuilder.fromHttpUrl(url2)
//				.queryParam("fields", "id,name,email,picture")
				.queryParam("fields", "email")
				.queryParam("access_token", access_token)
				.queryParam("redirect_uri", "http://localhost:8090/user/auth/facebook")
				.build(false); 
		String uri2 = builder2.toUriString();
		System.out.println(uri2);
		ResponseEntity<String> response2 = rt2.exchange(
				uri2,
				HttpMethod.GET,
				null,
				String.class);
		System.out.println("토큰을 사용한 정보요청에 대한 응답");
		System.out.println(response2.getBody());
		OAuthToken forFacebookId=null;
		try {
			forFacebookId = objectMapper.readValue(response2.getBody(), OAuthToken.class);
		} catch (JsonMappingException e) {
			e.printStackTrace();
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		String facebookId = forFacebookId.getId();
		System.out.println("페이스북 고유아이디번호");
		System.out.println(facebookId.toString());
		String registerId = "facebook_"+facebookId;//실제 회원가입 시킬 아이디(이메일)
		String password = "임시비밀번호";	//null이 아닌 특정값! 사용할일 X 없으면 비밀번호없이 그냥 로그인 가능해짐
		
		//페이스북 아이디로 등록된 유저가 있는경우에는 session만들어서 로그인진행
		int cnt =0;
//		cnt = mapper.isUser(registerId);
		if(cnt==0) {//결과값이 없는경우
			//없는경우에는 회원등록 후 session로그인 진행
			httpSession.setAttribute("USERID_SESSION", registerId);
			httpServletResponse.sendRedirect("http://localhost:3000/");
		}else {//동일한 값이 있는경우
			//해당 아이디 서버에 세션등록
			httpSession.setAttribute("USERID_SESSION", registerId);
			//로그인 후 홈경로로 보냄
			httpServletResponse.sendRedirect("http://localhost:3000/");
		}
		((ServletRequest) httpServletResponse).setAttribute("userId",registerId);
		RequestDispatcher dispatcher = httpServletRequest.getRequestDispatcher("http://localhost:3000/");
		dispatcher.forward(httpServletRequest, httpServletResponse);
		return registerId;
	}
}