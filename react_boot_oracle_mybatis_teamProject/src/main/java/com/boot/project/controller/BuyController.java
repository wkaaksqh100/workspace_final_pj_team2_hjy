package com.boot.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.boot.project.dto.ItemDTO;
import com.boot.project.service.SearchServiceImpl;

@RestController // RestController는 리턴타입이 JSON
@RequestMapping("/api")
@CrossOrigin	// 추가  
public class BuyController {
	
	@Autowired
	private SearchServiceImpl service;
	
//	// 구매 등록 PostMapping => http://localhost:8081/api/board
//	@PostMapping("/buyInsert")
//	public ResponseEntity<?> save(@RequestBody ItemDTO item) {	// ?를 주면 자동으로 적용된다. T 와 같은 의미, 데이터가 아직 결정되지 않았다는 뜻 => Integer 또는 ? 를 주면 된다. 
//		System.out.println("<<< save >>>");
//		
//		return new ResponseEntity<>(service.saveBoard(item), HttpStatus.CREATED); // 201 // <>를 주면 위에 있는 <Integer>안에 있는게 그대로 적용된다.
//	}
	
	
}
