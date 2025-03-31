package com.boot.project.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.boot.project.dao.ItemMapper;
import com.boot.project.dto.ItemDTO;

@Service
@Transactional  // 트랜잭션 적용
public class ItemServiceImpl {
	
	@Autowired
	private ItemMapper ItemMapper;
	
	// 구매 물품 등록
	@Transactional // 서비스 함수가 종료될 때 commit 할지 rollback 할지 트랜잭션 관리하겠다.
	public int saveItem(ItemDTO dto) {
		return ItemMapper.insertItem(dto);	// mybatis에서는 I,U,D 리턴타입이 int(1:성공, 0:실패)
	}

}
