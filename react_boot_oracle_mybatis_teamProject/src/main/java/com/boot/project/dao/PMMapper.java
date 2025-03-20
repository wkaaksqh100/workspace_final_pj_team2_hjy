package com.boot.project.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.boot.project.dto.PMDTO;

@Mapper 	// DAOImpl 만들지 않고 mapper랑 연결할때 쓴다.
@Repository
public interface PMMapper {
	
	public List<PMDTO> purchaseList();	// 구매 목록
	
}
