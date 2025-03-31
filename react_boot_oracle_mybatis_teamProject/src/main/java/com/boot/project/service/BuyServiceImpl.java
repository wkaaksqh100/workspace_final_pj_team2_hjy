package com.boot.project.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boot.project.dao.BuyMapper;

@Service
public class BuyServiceImpl {
	
	@Autowired
	private BuyMapper BuyMapper;
	

}
