package com.boot.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.boot.project.dao.BuyMapper;
import com.boot.project.dto.BuyDTO;

@Service
public class BuyServiceImpl {
	
	@Autowired
	private BuyMapper BuyMapper;
	
	// 구매 목록
	@Transactional(readOnly=true)
	public List<BuyDTO> buyList(){
		
		return BuyMapper.buyList();
	}
}
