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
@Table(name="mvc_purchase_tbl")
public class MMDTO {
	
	@Id
	private int mm_partner_no;		// 거래처 번호
	private String mm_partner_name;	// 거래처명
	private Date mm_input_date;	// 구매입력일자	
	private int item_number;		// 품목번호	
	private String product;			// 상품	
	private String correspondent;	// 거래처	
	private String manager;			// 담당자	
	private Date registration_date;	// 등록일	
	private Date receipt_date;		// 입고일	
	private int purchase_quantity;	// 구매수량		
	private int purchase_price;		// 구매단가	
	private Date payment_period;	// 지급기간	
	private int purchase_status;	// 구매상태
	

}
