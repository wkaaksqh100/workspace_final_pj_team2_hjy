package com.boot.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.boot.project.dto.ItemDTO;
import com.boot.project.service.ItemServiceImpl;

@RestController // RestController는 리턴타입이 JSON
@RequestMapping("/api")
@CrossOrigin	// 추가  
public class ItemController {
	
	@Autowired
	private ItemServiceImpl service;
	
	// 구매물품 목록 GetMapping => http://localhost:8081/api/orderList
	@GetMapping("/orderList")
	public ResponseEntity<?> findAll() {	 
		System.out.println("<<< orederList >>>");
		
		return new ResponseEntity<>(service.orderList(), HttpStatus.OK); //200
	}
	
	// 구매물품 등록 PostMapping => http://localhost:8081/api/orderItem
	@PostMapping("/orderItem")
	public ResponseEntity<?> save(@RequestBody ItemDTO item) {	// ?를 주면 자동으로 적용된다. T 와 같은 의미, 데이터가 아직 결정되지 않았다는 뜻 => Integer 또는 ? 를 주면 된다. 
		System.out.println("<<< save >>>");
		
		return new ResponseEntity<>(service.saveItem(item), HttpStatus.CREATED); // 201 // <>를 주면 위에 있는 <Integer>안에 있는게 그대로 적용된다.
	}
	
	// 구매물품 상세 GetMapping => http://localhost:8081/api/board/{b_num}
	@GetMapping("/orderItem/{order_id}")
	public ResponseEntity<?> findById(@PathVariable Integer order_id) {
		System.out.println("<<< findById >>>");
		
		return new ResponseEntity<ItemDTO>(service.findByOrderId(order_id), HttpStatus.OK);	// 200
	}
	
	// 구매물품 삭제 DeleteMapping => http://localhost:8081/api/orderItem/{order_id}
	@DeleteMapping("/orderItem/{order_id}")
	public ResponseEntity<?> deleteOrder(@PathVariable int order_id){
		System.out.println("<<< deleteOrder >>>");
		
		return new ResponseEntity<String>(service.deleteOrder(order_id), HttpStatus.OK);	// 200
	}
	
	// 게시글 수정 PutMapping => http://localhost:8081/api/orderItem/{order_id}
	@PutMapping("/orderItem/{order_id}")
	public ResponseEntity<?> updateOrder(@PathVariable int order_id, @RequestBody ItemDTO orderItem){
		System.out.println("<<< updateOrder >>>");
		
		return new ResponseEntity<>(service.updateOrder(order_id, orderItem), HttpStatus.OK);	// 200
	}
	
}
