package com.boot.project.dto;

import javax.persistence.Id;

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
//@Entity					// ORM(table의 컬럼과 object의 멤버변수를 매핑)  
//@Table(name="order_tbl")
public class OrderItemDTO {
	
	@Id
	private String itemCode;   // null 가능
    private String itemName;
    private int quantity;
    private int price;
    private int supply;
    private int vat;
    private int total;
	
}
