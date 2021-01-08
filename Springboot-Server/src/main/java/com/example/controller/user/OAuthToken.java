package com.example.controller.user;
import lombok.Data;

@Data
public class OAuthToken {
	private String id;	//페이스북 아이디
	private String name; //페이스북 이름
	private String email; //페이스북 이메일
	
	private String access_token;
	private String token_type;
	private int expires_in;
	private String refresh_token;
	private String scope;
	private int refresh_token_expires_in;

}
