import { Table, Button, Modal, Checkbox } from 'rsuite';
//import { mockUsers } from './mock';
import React from 'react';
import Chit from './ChitMM';
import ChitMM from './ChitMM';

const { Column, HeaderCell, Cell } = Table;
const data = [
    { id: 1, date: "2025-03-20", CustomerName: "풀무원", ItemName: "나또", TotalAmount: "1,000,000", TransactionType: "부가세율 적용", WarehouseName: "파주물류창고", account: "X", print: "인쇄", chit: "조회" },
    { id: 1, date: "2025-03-20", CustomerName: "풀무원", ItemName: "계란", TotalAmount: "1,000,000", TransactionType: "부가세율 적용", WarehouseName: "파주물류창고", account: "X", print: "인쇄", chit: "조회" },
];

const SelectMMYet = () => {

    const styles = {
        //width: 960,
        //marginBottom: 10,
        backgroundColor: '#f8f9fa',

    };

    // 인쇄 모달
    const [open1, setOpen1] = React.useState(false);
    const handleOpen1 = () => setOpen1(true);
    const handleClose1 = () => setOpen1(false);

    // 불러온 전표
    const [open2, setOpen2] = React.useState(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);

    return (
        <>
        <Table virtualized height={500} data={data} style={{width: 960}}>
           
            <Column width={40} align="center" fixed >
                <HeaderCell style={styles}></HeaderCell >
                <Cell dataKey="id" >
                    <Checkbox />
                    </Cell>
            </Column>

            <Column width={100}>
                <HeaderCell style={styles}>일자-No.</HeaderCell>
                <Cell dataKey="date" />
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
                <Cell dataKey="TransactionType" />
            </Column>

            <Column width={120}>
                <HeaderCell style={styles}>창고명</HeaderCell>
                <Cell dataKey="WarehouseName" />
            </Column>

            <Column width={100}>
                <HeaderCell style={styles}>회계반영여부</HeaderCell>
                <Cell dataKey="account" />
            </Column>

            <Column width={80}>
                    <HeaderCell style={styles}>인쇄</HeaderCell>
                    <Cell style={{ padding: '6px' }}>
                        {rowData => (
                            <Button color="yellow" appearance='link' onClick={handleOpen1}>
                                인쇄
                            </Button>
                        )}
                    </Cell>
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

             {/* 인쇄 버튼 클릭시 모달 상세 */}
            <Modal open={open1} onClose={handleClose1}>
                <Modal.Header>
                    <Modal.Title>인쇄</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose1} appearance="primary">
                        저장
                    </Button>
                    <Button onClick={handleClose1} appearance="subtle">
                        닫기
                    </Button>
                </Modal.Footer>
            </Modal>

             {/* 불러온전표 버튼 클릭시 모달 상세 */}
            <Modal open={open2} onClose={handleClose2}>
                <Modal.Header>
                    <Modal.Title>불러온 전표</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        <ChitMM />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose2} appearance="primary">
                        저장
                    </Button>
                    <Button onClick={handleClose2} appearance="subtle">
                        닫기
                    </Button>
                </Modal.Footer>
            </Modal>
            </>
    );
};

export default SelectMMYet;