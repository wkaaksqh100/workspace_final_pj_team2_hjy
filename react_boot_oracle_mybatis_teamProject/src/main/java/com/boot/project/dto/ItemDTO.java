package com.boot.project.dto;

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
//@Table(name = "order_item_tbl​")
public class ItemDTO {
	
	// 물품정보
	@Id
	private int order_id ; 				// 주문번호
	private int item_code; 				// 물품코드
	private String item_name; 			// 물품명
	private int quantity; 				// 수량
	
//	private double price; 				// 가격
//	private double supply; 				// 공급가
//	private double vat; 				// 부가세
//	private double total; 				// 금액합계
	
}
