package com.example.vo.user;

import lombok.Data;

@Data
public class UserVO {
	private String email;
	private String password;
	private String name;
	private java.sql.Date RegDt;
	private java.sql.Date ModDt;
}