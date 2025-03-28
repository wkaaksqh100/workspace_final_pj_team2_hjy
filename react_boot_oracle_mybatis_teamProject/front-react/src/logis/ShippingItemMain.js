import React, { useEffect, useState  } from 'react';
import { Link } from 'react-router-dom';
import { Table/*, Button */ } from 'rsuite';
import '../common/css/logisCommon.css'
const { Column, HeaderCell, Cell } = Table;

const OrderList = () => {

    let[orderList, setOrderList] = useState([]); // 초기값을 모르므로 빈배열로 warehouseList에 대입
    orderList = [
        {
            "p_code": 1,
            "p_name": "커피 외",
            "p_incharge": "신대리",
            "p_department": "판매4팀",
        },
        {
            "p_code": 2,
            "p_name": "나또 외",
            "p_incharge": "지과장",
            "p_department": "판매3팀",
        },
        {
            "p_code": 3,
            "p_name": "샐러리 외",
            "p_incharge": "염대리",
            "p_department": "판매2팀",
        },
        {
            "p_code": 4,
            "p_name": "두부 외",
            "p_incharge": "현대리",
            "p_department": "판매1팀",
        }
    ];

    // fetch()를 통해 서버에게 데이터를 요청
    // useEffect(() =>{ // 통신 시작 하겠다.
    //     fetch("http://localhost:8081/api2/orderList", { // 스프링부트에 요청한다.
    //         method: "GET" // "GET" 방식으로
    //     }).then(
    //         res => res.json() // 응답이 오면 javascript object로 바꾸겠다.
    //     ).then( 
    //         res => {
    //             // console.log("OrderList  res : ", res)
    //             setOrderList(res);
    //         }
    //     )

    // }, []);

    return (
        <div className='div_for_receiving'>
            <div className='header logiHeader'>
                금일 출고 현황 - WarehousingList2
            </div>
            <Table
                data={orderList}
                height={400}
                className="text_center overflow_scroll for_main"
            >
                <Column width={60} align="center" fixed>
                    <HeaderCell>출고번호</HeaderCell>
                    <Cell dataKey="p_code" />
                </Column>

                <Column width={150}>
                    <HeaderCell>품목명</HeaderCell>
                    <Cell dataKey="p_name">
                        {orderList.p_name}
                    </Cell>
                </Column>

                <Column width={150}>
                    <HeaderCell>출고일자</HeaderCell>
                    <Cell dataKey="p_delivery" />
                </Column>

                <Column width={100}>
                    <HeaderCell>담당자명 </HeaderCell>
                    <Cell dataKey="p_incharge" />
                </Column>

                <Column width={100}>
                    <HeaderCell>담당부서 </HeaderCell>
                    <Cell dataKey="p_department" />
                </Column>

                <Column width={200} fixed="right">
                    <HeaderCell>상세보기</HeaderCell>

                    <Cell style={{ padding: '6px' }}>
                        {orderList =>
                            <Link to={'/main/warehouse_order_itemlist/2'} className="btn btn-primary area_fit wide_fit">주문상세보기</Link>
                            // <Link key={orderList.p_code} to={'/orderItemList/' + orderList.p_code} className="btn btn-primary area_fit wide_fit">주문상세보기</Link>
                        }
                    </Cell>
                </Column>
            </Table>
        </div>
    )
}

export default OrderList;