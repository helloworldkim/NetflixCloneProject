package com.example.vo.user;

import lombok.Data;

@Data
public class UserVO {
	
	private int id;	 //아이디 인덱스값 primaryKey;
	private String email;
	private String password;
	private String name;
	private java.sql.Date RegDt;
	private java.sql.Date ModDt;
}