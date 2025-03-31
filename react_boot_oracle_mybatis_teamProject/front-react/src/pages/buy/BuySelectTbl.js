import { Table, Button, Checkbox } from 'rsuite';
import React from 'react';
import './buy.css';
import { _chitModalForm } from '../../components/ChitModalForm';

const { Column, HeaderCell, Cell } = Table;

// const data = [
//     { date: "2025-03-20", no: 1, CustomerName: "풀무원", ItemName: "두부", TotalAmount: "1,000,000", mm_delivery_date : "2025-05-12", WarehouseName: "파주물류창고", account: "X", print: "인쇄", chit: "조회" },
//     { date: "2025-03-20", no: 2, CustomerName: "풀무원", ItemName: "나또", TotalAmount: "1,000,000", mm_delivery_date: "2025-05-12", WarehouseName: "파주물류창고", account: "X", print: "인쇄", chit: "조회" },
//     { date: "2025-03-20", no: 3, CustomerName: "풀무원", ItemName: "콩나물", TotalAmount: "1,000,000", mm_delivery_date: "2025-05-12", WarehouseName: "파주물류창고", account: "O", print: "인쇄", chit: "조회" },
//     { date: "2025-03-20", no: 4, CustomerName: "풀무원", ItemName: "계란", TotalAmount: "1,000,000", mm_delivery_date: "2025-05-12", WarehouseName: "파주물류창고", account: "X", print: "인쇄", chit: "조회" },
//     { date: "2025-03-20", no: 5, CustomerName: "풀무원", ItemName: "단무지", TotalAmount: "1,000,000", mm_delivery_date: "2025-05-12", WarehouseName: "파주물류창고", account: "O", print: "인쇄", chit: "조회" },
//     { date: "2025-03-20", no: 6, CustomerName: "풀무원", ItemName: "두부", TotalAmount: "1,000,000", mm_delivery_date: "2025-05-12", WarehouseName: "파주물류창고", account: "O", print: "인쇄", chit: "조회" },
//     { date: "2025-03-20", no: 7, CustomerName: "풀무원", ItemName: "두부", TotalAmount: "1,000,000", mm_delivery_date: "2025-05-12", WarehouseName: "파주물류창고", account: "O", print: "인쇄", chit: "조회" },
//     { date: "2025-03-20", no: 8, CustomerName: "풀무원", ItemName: "두부", TotalAmount: "1,000,000", mm_delivery_date: "2025-05-12", WarehouseName: "파주물류창고", account: "O", print: "인쇄", chit: "조회" },
//     { date: "2025-03-20", no: 9, CustomerName: "풀무원", ItemName: "두부", TotalAmount: "1,000,000", mm_delivery_date: "2025-05-12", WarehouseName: "파주물류창고", account: "O", print: "인쇄", chit: "조회" },
//     { date: "2025-03-20", no: 10, CustomerName: "풀무원", ItemName: "두부", TotalAmount: "1,000,000", mm_delivery_date: "2025-05-12", WarehouseName: "파주물류창고", account: "O", print: "인쇄", chit: "조회" },
// ];

const BuySelectTbl = () => {

    // const[buyList, setBuyList] =  useState([]); // 초기값을 모르므로 빈배열로 buyList에 대입

    // // fecth()를 통해 톰캣서버에세 데이터를 요청
    // useEffect(() => {
    //     fetch("http://localhost:8081/api/buyList", {
    //         method: "GET"
    //     })
    //     .then(res => res.json() // 응답이 오면 javascript object로 바꾸겠다.
    //     )
    //     .then(res => {
    //         console.log(1, res); 
    //         setBuyList(res); // 처음에는 비어있으므로 못가져온다. setBoardList(res);
    //     }
    //     )
    // }, []); // []은 디펜던시인데, setState()로 렌더링될때 실행되면 안되고, 1번만 실행하도록 빈배열을 넣어둔다.
    // // CORS 오류 : Controller 진입 직전에 적용된다. 외부에서 자바스크립트 요청이 오는 것을

    const styles = {
        backgroundColor: '#f8f9fa',
    };

    return (

        <>
            {/* {buyList.map(buySearch => ()
                <buyItem key={buySearch.order_id} buySearch={buySearch}/>
            )} */}
            <Table virtualized height={500} style={{ maxWidth: 1500 }}>

                <Column width={40} align="center" fixed >
                    <HeaderCell style={styles}></HeaderCell >
                    <Cell dataKey="id" >
                        <Checkbox />
                    </Cell>
                </Column>

                <Column width={100}>
                    <HeaderCell style={styles}>등록일자</HeaderCell>
                    <Cell dataKey="order_date" />
                </Column>

                <Column width={100}>
                    <HeaderCell style={styles}>주문번호</HeaderCell>
                    <Cell dataKey="order_id" />
                </Column>

                <Column width={100}>
                    <HeaderCell style={styles}>거래처명</HeaderCell>
                    <Cell dataKey="client_name" />
                </Column>

                <Column width={100}>
                    <HeaderCell style={styles}>품목명</HeaderCell>
                    <Cell dataKey="item_name" />
                </Column>

                <Column width={100}>
                    <HeaderCell style={styles}>금액합계</HeaderCell>
                    <Cell dataKey="total" />
                </Column>

                <Column width={100}>
                    <HeaderCell style={styles}>거래유형</HeaderCell>
                    <Cell dataKey="transaction_type " />
                </Column>

                <Column width={100}>
                    <HeaderCell style={styles}>입고창고</HeaderCell>
                    <Cell dataKey="storage_name" />
                </Column>

                <Column width={100}>
                    <HeaderCell style={styles}>회계반영 여부</HeaderCell>
                    <Cell dataKey="closing_staus" />
                </Column>

                <Column width={100}>
                    <HeaderCell style={styles}>종결여부</HeaderCell>
                    <Cell dataKey="order_status" />
                </Column>

                <Column width={100} fixed="right">
                    <HeaderCell style={styles}>불러온전표</HeaderCell>
                    <Cell style={{ padding: '6px' }}>
                        {rowData => (
                            <Button color="blue" appearance='link' onClick={_chitModalForm.getHandle().open}>
                                조회
                            </Button>
                        )}
                    </Cell>
                </Column>
            </Table>       

        </>
    );
};

export default BuySelectTbl;
