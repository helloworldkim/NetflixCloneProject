package com.example.controller.user;
import lombok.Data;

@Data
public class OAuthToken {
	private String id;	//페이스북 아이디
	private String access_token;
	private String token_type;
	private int expires_in;
	private String refresh_token;
	private String scope;
	private int refresh_token_expires_in;

}
