package com.boot.project.dao;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.boot.project.dto.ItemDTO;

@Mapper 	// DAOImpl 만들지 않고 mapper랑 연결할때 쓴다.
@Repository
public interface ItemMapper {
	
	public int insertItem(ItemDTO dto);  // 구매 물품 등록

	
}
