package com.boot.project.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.boot.project.dao.MMMapper;
import com.boot.project.dto.MMDTO;

@Service
public class MMServiceImpl {
	
	private MMMapper PMMapper;
	
	// 구매 목록
	@Transactional(readOnly=true)
	public List<MMDTO> purchaseList(){
		
		return PMMapper.purchaseList();
	}
}
