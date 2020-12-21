package com.example.controller.user;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
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
	int login(@RequestBody UserVO user, HttpSession httpSession) {
		System.out.println(user.toString());
		int cnt = mapper.getUser(user);	//유저 존재여부 확인
		UserVO myuser =null;
		if (cnt == 1) {
			myuser= mapper.getUserInfo(user);
			System.out.println(myuser.toString());
			httpSession.setAttribute("USERID_SESSION", user.getEmail());
		}
		return myuser.getId();//회원의 인덱스값(아이디값을 보내줌)
	}

	@GetMapping("/logout")
	String logout(HttpSession httpSession) {
		System.out.println("로그아웃함");
		httpSession.invalidate();
		return "로그아웃";
	}
	@PostMapping("/join")
	int join(@RequestBody UserVO user, HttpSession httpSession) {
		System.out.println(user.toString());
		//동일한 이메일을 가진 회원이 있는지 체크
		int cnt = mapper.isUser(user.getEmail());
		if(cnt ==1) {
			//회원가입 실패시 0 반환
			return 0;
		}else {
			//회원가입 진행
			int result = mapper.insertUser(user);
//				결과값이 정상적으로 리턴됬을때 session에 저장할 user정보 호출
				UserVO newUser = mapper.getUserInfo(user);
				//서버에 이메일정보 저장
				httpSession.setAttribute("USERID_SESSION", newUser.getEmail());
				int userid= newUser.getId();
			//성공시 해당 유저의 primarykey 정보 반환
			return userid;
		}
	}
	
	//user/auth/facebook
	//facebook 등록된 redirect url 주소 http://localhost:8090/user/auth/facebook
	//기본 접속주소가 connect/facebook
//뷰단에서 요청하는 주소           "https://www.facebook.com/v2.11/dialog/oauth?client_id=770894283636482&redirect_uri=http://localhost:8090/user/auth/facebook"
	@GetMapping("/auth/facebook")
	String oauthFacebookLogin(@RequestParam(value="code") String code,
			HttpSession httpSession,
			HttpServletResponse httpServletResponse,
			HttpServletRequest  httpServletRequest,
			Model model) throws IOException, ServletException {
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
//		public_profile,email,id
		UriComponents builder2 = UriComponentsBuilder.fromHttpUrl(url2)
				.queryParam("fields", "id,name,email")
//				.queryParam("fields", "email")
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
		System.out.println(uri2);
		System.out.println("토큰을 사용한 정보요청에 대한 응답");
		System.out.println(response2.getBody());
		OAuthToken facebookInfo=null;
		try {
			facebookInfo = objectMapper.readValue(response2.getBody(), OAuthToken.class);
		} catch (JsonMappingException e) {
			e.printStackTrace();
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		String facebookId = facebookInfo.getId();
		System.out.println("페이스북 고유아이디번호");
		System.out.println(facebookId.toString());
		System.out.println(facebookInfo.getName());
//		System.out.println(facebookInfo.getEmail()); //이메일 없음
		String registerId = "facebook_"+facebookId;//실제 회원가입 시킬 아이디(이메일)
		System.out.println("가입진행할 아이디");
		System.out.println(registerId);
		String password = "임시비밀번호";	//null이 아닌 특정값! 사용할일 X 없으면 비밀번호없이 그냥 로그인 가능해짐
		
		//페이스북 아이디로 등록된 유저가 있는경우에는 session만들어서 로그인진행
		int cnt =0;
		cnt = mapper.isUser(registerId);
		if(cnt==0) {//결과값이 없는경우
			//회원등록 후 session로그인 진행
			UserVO facebookUser = new UserVO();
			facebookUser.setEmail(registerId);//직접 제작한 useremail
			facebookUser.setPassword(password);//비밀번호 임시값
			facebookUser.setName("이름없음");//임시값
			mapper.insertUser(facebookUser);
			httpSession.setAttribute("USERID_SESSION", registerId);
			httpServletResponse.sendRedirect("http://localhost:3000?id="+facebookUser.getId());
		}else {//동일한 값이 있는경우
			//해당 아이디 서버에 세션등록
			httpSession.setAttribute("USERID_SESSION", registerId);
			UserVO facebookUser = mapper.getUserInfoForFacebook(registerId);	//조합한 이메일로 유저정보 요청해서 받아옴
			//로그인 후 홈경로로 보냄
			httpServletResponse.sendRedirect("http://localhost:3000?id="+facebookUser.getId());
		}
		return "페이스북 로그인";
	}
}