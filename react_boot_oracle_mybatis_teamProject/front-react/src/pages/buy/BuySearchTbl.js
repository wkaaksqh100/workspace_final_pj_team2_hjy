import { Table, Button, Modal, Checkbox } from 'rsuite';
import React from 'react';
import ChitMM from './ChitMM';
import './buy.css';

const { Column, HeaderCell, Cell } = Table;

const data = [
    { date: "2025-03-20", no: 1, CustomerName: "풀무원", ItemName: "두부", TotalAmount: "1,000,000", mm_delivery_date : "2025-05-12", WarehouseName: "파주물류창고", account: "X", print: "인쇄", chit: "조회" },
    { date: "2025-03-20", no: 2, CustomerName: "풀무원", ItemName: "나또", TotalAmount: "1,000,000", mm_delivery_date: "2025-05-12", WarehouseName: "파주물류창고", account: "X", print: "인쇄", chit: "조회" },
    { date: "2025-03-20", no: 3, CustomerName: "풀무원", ItemName: "콩나물", TotalAmount: "1,000,000", mm_delivery_date: "2025-05-12", WarehouseName: "파주물류창고", account: "O", print: "인쇄", chit: "조회" },
    { date: "2025-03-20", no: 4, CustomerName: "풀무원", ItemName: "계란", TotalAmount: "1,000,000", mm_delivery_date: "2025-05-12", WarehouseName: "파주물류창고", account: "X", print: "인쇄", chit: "조회" },
    { date: "2025-03-20", no: 5, CustomerName: "풀무원", ItemName: "단무지", TotalAmount: "1,000,000", mm_delivery_date: "2025-05-12", WarehouseName: "파주물류창고", account: "O", print: "인쇄", chit: "조회" },
    { date: "2025-03-20", no: 6, CustomerName: "풀무원", ItemName: "두부", TotalAmount: "1,000,000", mm_delivery_date: "2025-05-12", WarehouseName: "파주물류창고", account: "O", print: "인쇄", chit: "조회" },
    { date: "2025-03-20", no: 7, CustomerName: "풀무원", ItemName: "두부", TotalAmount: "1,000,000", mm_delivery_date: "2025-05-12", WarehouseName: "파주물류창고", account: "O", print: "인쇄", chit: "조회" },
    { date: "2025-03-20", no: 8, CustomerName: "풀무원", ItemName: "두부", TotalAmount: "1,000,000", mm_delivery_date: "2025-05-12", WarehouseName: "파주물류창고", account: "O", print: "인쇄", chit: "조회" },
    { date: "2025-03-20", no: 9, CustomerName: "풀무원", ItemName: "두부", TotalAmount: "1,000,000", mm_delivery_date: "2025-05-12", WarehouseName: "파주물류창고", account: "O", print: "인쇄", chit: "조회" },
    { date: "2025-03-20", no: 10, CustomerName: "풀무원", ItemName: "두부", TotalAmount: "1,000,000", mm_delivery_date: "2025-05-12", WarehouseName: "파주물류창고", account: "O", print: "인쇄", chit: "조회" },
];

const BuySearchTbl = () => {

    //const[MMList, setMMList] = useState([]);    // 초기값을 모르므로 빈배열로 MMList에 대입



    const styles = {
        backgroundColor: '#f8f9fa',
    };

    // 불러온 전표
    const [open2, setOpen2] = React.useState(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);

    return (
        <>
            <Table virtualized height={500} data={data} style={{ width: 960 }}>

                <Column width={40} align="center" fixed >
                    <HeaderCell style={styles}></HeaderCell >
                    <Cell dataKey="id" >
                        <Checkbox />
                    </Cell>

                </Column>

                <Column width={100}>
                    <HeaderCell style={styles}>일자</HeaderCell>
                    <Cell dataKey="date" />
                </Column>

                <Column width={80}>
                    <HeaderCell style={styles}>No.</HeaderCell>
                    <Cell dataKey="no" />
                </Column>

                <Column width={110}>
                    <HeaderCell style={styles}>거래처명</HeaderCell>
                    <Cell dataKey="CustomerName" />
                </Column>

                <Column width={110}>
                    <HeaderCell style={styles}>품목명</HeaderCell>
                    <Cell dataKey="ItemName" />
                </Column>

                <Column width={100}>
                    <HeaderCell style={styles}>금액합계</HeaderCell>
                    <Cell dataKey="TotalAmount" />
                </Column>

                <Column width={120}>
                    <HeaderCell style={styles}>거래유형</HeaderCell>
                    <Cell dataKey="transaction_type " />
                </Column>

                <Column width={120}>
                    <HeaderCell style={styles}>입고창고</HeaderCell>
                    <Cell dataKey="WarehouseName" />
                </Column>

                <Column width={100}>
                    <HeaderCell style={styles}>종결여부</HeaderCell>
                    <Cell dataKey="account" />
                </Column>

                <Column width={80} fixed="right">
                    <HeaderCell style={styles}>불러온전표</HeaderCell>
                    <Cell style={{ padding: '6px' }}>
                        {rowData => (
                            <Button color="blue" appearance='link' onClick={handleOpen2}>
                                조회
                            </Button>
                        )}
                    </Cell>
                </Column>
            </Table>       

            {/* 불러온전표 버튼 클릭시 모달 상세 */}
            <Modal open={open2} onClose={handleClose2}>
                <Modal.Header>
                    <Modal.Title>불러온전표</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ChitMM />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose2} appearance="subtle">
                        닫기
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    );
};

export default BuySearchTbl;
