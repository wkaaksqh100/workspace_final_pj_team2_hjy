package com.boot.project.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.boot.project.dto.ClientDTO;
import com.boot.project.dto.InchargeDTO;

@Mapper 	// DAOImpl 만들지 않고 mapper랑 연결할때 쓴다.
@Repository
public interface SearchMapper {
	
	public List<InchargeDTO> findByIncharge();	// 사원 목록

	public List<ClientDTO> findByClient();	// 거래처 목록
	
}
