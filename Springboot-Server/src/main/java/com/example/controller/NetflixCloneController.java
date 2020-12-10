package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.mapper.NetflixCloneMapper;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/netflix")

public class NetflixCloneController {
	
	@Autowired
	NetflixCloneMapper mapper;
}
