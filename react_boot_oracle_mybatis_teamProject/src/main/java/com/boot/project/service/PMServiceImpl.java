package com.boot.project.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.boot.project.dao.PMMapper;
import com.boot.project.dto.PMDTO;

@Service
public class PMServiceImpl {
	
	private PMMapper PMMapper;
	
	// 구매 목록
	@Transactional(readOnly=true)
	public List<PMDTO> purchaseList(){
		
		return PMMapper.purchaseList();
	}
}
