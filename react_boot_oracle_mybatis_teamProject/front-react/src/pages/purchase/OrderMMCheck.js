import { Table, Button, Modal, Checkbox } from 'rsuite';
//import { mockUsers } from './mock';
import React from 'react';
import Column from 'rsuite/esm/Table/TableColumn';

const { HeaderCell, Cell } = Table;
const data = [
    { id: 1, date: '2025-03-20', CustomerName: '조명공장', Manager: '김크롱', ItemName: '루이스폴센 조명', DeliveryDate: '2025-04-15', TotalAmount: '19,500,000', closingStaus: '진행중', print: '인쇄', progresStatus: '조회' },
    { id: 2, date: '2025-03-20', CustomerName: '조명공장', Manager: '김크롱', ItemName: '루이스폴센 조명', DeliveryDate: '2025-04-15', TotalAmount: '19,500,000', closingStaus: '진행중', print: '인쇄', progresStatus: '조회' },
    { id: 3, date: '2025-03-20', CustomerName: '조명공장', Manager: '김크롱', ItemName: '루이스폴센 조명', DeliveryDate: '2025-04-15', TotalAmount: '19,500,000', closingStaus: '진행중', print: '인쇄', progresStatus: '조회' },

];

const OrderMMCheck = () => {

    const styles = {
        //width: 960,
        //marginBottom: 10,
        backgroundColor: '#f8f9fa',

    };

    // 진행상태
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
                        <HeaderCell style={styles}>발주번호</HeaderCell>
                        <Cell dataKey="date" />
                        {/* {rowData => (
                            <Button onClick={() => alert(`id:${rowData.id}`)}>
                                조회
                            </Button>
                        )} */}
                    </Column>
    
                    <Column width={120}>
                        <HeaderCell style={styles}>거래처명</HeaderCell>
                        <Cell dataKey="CustomerName" />
                    </Column>
    
                    <Column width={100}>
                        <HeaderCell style={styles}>담당자</HeaderCell>
                        <Cell dataKey="Manager" />
                    </Column>
    
                    <Column width={150}>
                        <HeaderCell style={styles}>품목</HeaderCell>
                        <Cell dataKey="ItemName" />
                    </Column>
    
                    <Column width={110}>
                        <HeaderCell style={styles}>납기일자</HeaderCell>
                        <Cell dataKey="DeliveryDate" />
                    </Column>
    
                    <Column width={120}>
                        <HeaderCell style={styles}>금액</HeaderCell>
                        <Cell dataKey="TotalAmount" />
                    </Column>
    
                    <Column width={100}>
                        <HeaderCell style={styles}>종결여부</HeaderCell>
                        <Cell dataKey="closingStaus" />
                    </Column>
    
                    <Column width={120}>
                        <HeaderCell style={styles}>인쇄</HeaderCell>
                        <Cell style={{ padding: '6px' }}>
                            {rowData => (
                                <Button color='yellow' appearance='link' onClick={handleOpen2}>
                                    인쇄
                                </Button>
                            )}
                        </Cell>
                    </Column>
                </Table>
    
                {/* 인쇄 버튼 클릭시 모달 상세 */}
                <Modal open={open2} onClose={handleClose2}>
                    <Modal.Header>
                        <Modal.Title>인쇄</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
    
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

export default OrderMMCheck;

