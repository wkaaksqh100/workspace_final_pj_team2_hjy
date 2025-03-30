package com.boot.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.boot.project.service.BuyServiceImpl;

@RestController // RestController는 리턴타입이 JSON
@RequestMapping("/api")
@CrossOrigin	// 추가  
public class BuyController {
	
	@Autowired
	private BuyServiceImpl service;
	
	// 구매 목록 GetMapping =>  http://localhost:8081/api/buyList
	@GetMapping("/buyList")
	public ResponseEntity<?> findAll() {
		System.out.println("<<< buyList >>>");
		
		return new ResponseEntity<>(service.buyList(), HttpStatus.OK);	//200
	}
	
}
