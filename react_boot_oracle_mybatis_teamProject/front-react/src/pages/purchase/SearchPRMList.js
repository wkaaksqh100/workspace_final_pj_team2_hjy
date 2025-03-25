import { Button, Modal, Table } from 'rsuite';
//import { mockUsers } from './mock';
import React from 'react';

const { Column, HeaderCell, Cell } = Table;
const data = [
    { customerCode: '0048231', customerName: '유어마인드', details: '내역'},
];

const SearchPRMList = () => {

    const styles = {
        //width: 960,
        //marginBottom: 10,
        backgroundColor: '#f8f9fa',
    };

     // 상세내역 > 내역 모달
     const [open1, setOpen1] = React.useState(false);
     const handleOpen1 = () => setOpen1(true);
     const handleClose1 = () => setOpen1(false);

    return (
        <>
            <Table
                height={400}
                data={data}
                onRowClick={rowData => {
                    console.log(rowData);
                }}
            >
                <Column width={230} align="center" fixed >
                    <HeaderCell style={styles}>거래처코드</HeaderCell >
                    <Cell dataKey="customerCode" />

                </Column>

                <Column width={230}>
                    <HeaderCell style={styles}>거래처명</HeaderCell>
                    <Cell dataKey="customerName" />
                </Column>

                <Column width={100}>
                    <HeaderCell style={styles}>상세내역</HeaderCell>
                    <Cell style={{ padding: '6px' }}>
                        {rowData => (
                            <Button color="yellow" appearance='link' onClick={handleOpen1}>
                                내역
                            </Button>
                        )}
                    </Cell>
                </Column>

            </Table>

            {/* 상세내역 > 내역 버튼 클릭시 모달 상세 */}
            <Modal open={open1} onClose={handleClose1}>
                <Modal.Header>
                    <Modal.Title>거래처 내역</Modal.Title>
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


        </>
    );
};

export default SearchPRMList;