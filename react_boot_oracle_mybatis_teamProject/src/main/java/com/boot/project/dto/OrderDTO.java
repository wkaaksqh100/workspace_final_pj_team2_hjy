package com.boot.project.dto;

import java.util.List; // Java List 사용

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
public class OrderDTO {

    private String orderDate;   // yyyy-MM-dd
    private String emid;			// 사원번호
    private String client_name;			// 거래처명
    private int storageCode;
    
    private List<OrderItemDTO> items;  // 구매 항목들
}

