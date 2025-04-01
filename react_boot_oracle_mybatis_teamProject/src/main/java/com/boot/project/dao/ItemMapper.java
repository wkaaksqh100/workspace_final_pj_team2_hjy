package com.boot.project.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.boot.project.dto.ItemDTO;

@Mapper 	// DAOImpl 만들지 않고 mapper랑 연결할때 쓴다.
@Repository
public interface ItemMapper {
	
	public List<ItemDTO> orderList();	// 구매 물품 목록
	
	public int insertItem(ItemDTO dto);  // 구매 물품 등록
	
	public int updateOrder(ItemDTO dto); 	// 게시글 수정

	public int deleteOrder(int order_id);	// 구매 물품 삭제
	
	public ItemDTO findByOrderId(int order_id);	// 구매물품 1건 조회
	
}
