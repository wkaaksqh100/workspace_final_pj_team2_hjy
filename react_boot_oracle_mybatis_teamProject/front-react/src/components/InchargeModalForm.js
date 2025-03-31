import React, { useEffect, useState } from "react";
import { Button, Checkbox, Modal, Table } from "rsuite";
import { Cell, HeaderCell } from "rsuite-table";
import Column from "rsuite/esm/Table/TableColumn";

const InchargeModalForm = ({ title, confirm, cancel, onInchargeSelect, handleOpen, handleColse }) => {
    const [inchargeList, setInchargeList] = useState([]);
    const [selectedIncharge, setSelectedIncharge] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8081/api/inchargeList", {
            method: "GET"
        })
            .then(res => res.json())
            .then(res => {
                setInchargeList(res);
            });
    }, []);

    const handleCheckboxChange = (checked, incharge) => {
        if (checked) {
            setSelectedIncharge(incharge); // 체크된 담당자 저장
        } else {
            setSelectedIncharge(null); // 체크 해제 시 초기화
        }
    };
    

    const handleSubmit = () => {
        if (selectedIncharge) {
            onInchargeSelect(selectedIncharge);
            handleColse();
        }
    };

    const styles = {
        backgroundColor: '#f8f9fa',
    };

    return (
        <Modal open={handleOpen} onClose={handleColse} size="xs">
            <Modal.Header>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Table height={500} data={inchargeList}>
                    <Column width={40} align="center" fixed>
                        <HeaderCell style={styles}></HeaderCell>
                        <Cell>
                            {(rowData) => (
                                <Checkbox
                                checked={selectedIncharge?.em_id === rowData.em_id} 
                                onChange={(_, checked) => handleCheckboxChange(checked, rowData)}
                            >
                                {/* {rowData.em_name} */}
                            </Checkbox>
                            )}
                        </Cell>
                    </Column>
                    <Column width={200} align="center" fixed>
                        <HeaderCell style={styles}>사원코드</HeaderCell>
                        <Cell>{(rowData) => rowData.em_id}</Cell>
                    </Column>
                    <Column width={200}>
                        <HeaderCell style={styles}>사원명</HeaderCell>
                        <Cell>{(rowData) => rowData.em_name}</Cell>
                    </Column>
                </Table>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleSubmit} appearance="primary">
                    {confirm}
                </Button>
                <Button onClick={handleColse} appearance="subtle">
                    {cancel}
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

InchargeModalForm.defaultProps = {
    title: "제목을 입력해주세요.",
    confirm: "확인",
    cancel: "취소",
};

export default InchargeModalForm;