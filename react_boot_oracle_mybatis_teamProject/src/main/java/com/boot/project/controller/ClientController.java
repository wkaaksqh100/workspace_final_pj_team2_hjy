package com.boot.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.boot.project.service.SearchServiceImpl;

@RestController // RestController는 리턴타입이 JSON
@RequestMapping("/api")
@CrossOrigin	// 추가  
public class ClientController {
	
	@Autowired
	private SearchServiceImpl service;
	
	// 거래처 목록 GetMapping =>  http://localhost:8081/api/clientList
	@GetMapping("/clientList")
	public ResponseEntity<?> findAll() {
		System.out.println("<<< clientList >>>");
		
		return new ResponseEntity<>(service.clientList(), HttpStatus.OK);	//200
	}
	
}
