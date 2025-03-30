package com.boot.project.dto;

import java.sql.Date;	// 주의

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data					// @Getter + @Setter 
@AllArgsConstructor		// 매개변수 생성자 
@NoArgsConstructor		// 디폴트 생성자
@ToString				// toString
@Builder				// 매개변수 생성자에 순서없이 값을 입력해서 세팅해도 마지막에 build()를 통해 빌더를 작동, 같은 타입의 다른변수의 값을 서로 바꿔 넣는 것을 방지한다.
@Entity					// ORM(table의 컬럼과 object의 멤버변수를 매핑)  
@Table(name="order_tbl")
public class BuyDTO {
	
	@Id
	private int order_id;				// 주문번호
	private Date order_date;			// 주문일자
	private int emid;					// 사원번호
	private int client_code;			// 거래처번호
	private int storage_code;			// 창고번호
	private String transaction_type;	// 거래유형
	private Date delivery_date;			// 납기일자	
	private Date shipment_order_date;	// 출고일자	
	private int order_code; 			// 발주번호
	private int item_code; 				// 물품번호
	private String item_name; 			// 물품명
	private String item_standard;		// 물품 규격
	private int quantity; 				// 수량
	private int price; 					// 가격
	private int supply; 				// 공급가
	private int vat; 					// 부가세
	private int total; 					// 총액
	
}
