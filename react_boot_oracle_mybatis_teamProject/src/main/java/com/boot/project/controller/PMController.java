package com.boot.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.boot.project.service.PMServiceImpl;

@RestController // RestController는 리턴타입이 JSON
//@RequestMapping("/api")
//@CrossOrigin	// 추가  
public class PMController {
	
	@Autowired
	private PMServiceImpl service;
	
	// http://localhost:8081/api/
	// 구매 목록
//	@GetMapping("/purchaseList")
//	public ResponseEntity<?> findAll() {
//		System.out.println("<<< purchaseList >>>");
//		
//		return new ResponseEntity<>(service.purchaseList(), HttpStatus.OK);	//200
//	}
	
	// localhost:8081/
	@GetMapping("/")
	public String test() {
		return "실행성공";
	}
	
}
