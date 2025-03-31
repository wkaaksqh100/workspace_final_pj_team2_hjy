package com.boot.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.boot.project.dao.BuyMapper;
import com.boot.project.dao.SearchMapper;
import com.boot.project.dto.BuyDTO;
import com.boot.project.dto.ClientDTO;
import com.boot.project.dto.InchargeDTO;

@Service
public class SearchServiceImpl {
	
	@Autowired
	private SearchMapper SearchMapper;
	
	// 담당자 목록
	@Transactional(readOnly=true)
	public List<InchargeDTO> inchargeList(){
		
		return SearchMapper.inchargeList();
	}

	// 거래처 목록
	@Transactional(readOnly=true)
	public List<ClientDTO> clientList(){
		
		return SearchMapper.clientList();
	}
}
