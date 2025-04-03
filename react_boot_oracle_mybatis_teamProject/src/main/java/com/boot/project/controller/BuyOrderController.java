package com.boot.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.boot.project.dto.OrderDTO;
import com.boot.project.service.BuyOrderServiceImpl;
import com.boot.project.service.SearchServiceImpl;

@RestController // RestController는 리턴타입이 JSON
@RequestMapping("/main")
@CrossOrigin	// 추가  
public class BuyOrderController {
	
	@Autowired
	private BuyOrderServiceImpl buyOrderService;
	
	@Autowired
	private SearchServiceImpl searchService;

	
	// 구매조회 목록 GetMapping => http://localhost:8081/main/buyOrderList
	@GetMapping("/buyOrderList")
	public ResponseEntity<?> findAll() {	// ?를 주면 자동으로 적용된다. T 와 같은 의미, 데이터가 아직 결정되지 않았다는 뜻 => Integer 또는 ? 를 주면 된다. 
		System.out.println("<<< buyOrderList >>>");
		
		return new ResponseEntity<>(buyOrderService.buyOrderList(), HttpStatus.OK); //200
	}
	
	// 담당자 목록 GetMapping =>  http://localhost:8081/main/findByIncharge
	@GetMapping("/findByIncharge")
	public ResponseEntity<?> findByIncharge() {
		System.out.println("<<< findByIncharge >>>");
		
		return new ResponseEntity<>(searchService.findByIncharge(), HttpStatus.OK);	//200
	}
	
	// 거래처 목록 GetMapping =>  http://localhost:8081/main/findByClient
	@GetMapping("/findByClient")
	public ResponseEntity<?> findByClient() {
		System.out.println("<<< findByClient >>>");
		
		return new ResponseEntity<>(searchService.findByClient(), HttpStatus.OK);	//200
	}
	
	// 구매 주문 등록 PostMapping => http://localhost:8081/main/insertBuyOrder
	@PostMapping("/insertBuyOrder")
    public ResponseEntity<?> saveBuyOrder(@RequestBody OrderDTO order) {
		System.out.println("<<< insertBuyOrder >>>");
		
		return new ResponseEntity<>(buyOrderService.saveBuyOrder(order), HttpStatus.CREATED);
    }
	
}
