import React from 'react'
import { Button, Modal } from 'rsuite';
import { Cell, HeaderCell } from 'rsuite-table';
import Column from 'rsuite/esm/Table/TableColumn';

const ModalPrint= () => {

    const styles = {
        backgroundColor: '#f8f9fa',
    };

    // 인쇄 모달
    const [open1, setOpen1] = React.useState(false);
    const handleOpen1 = () => setOpen1(true);
    const handleClose1 = () => setOpen1(false);

    return (
        <div>
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
        </div>
    );

};

export default ModalPrint;
