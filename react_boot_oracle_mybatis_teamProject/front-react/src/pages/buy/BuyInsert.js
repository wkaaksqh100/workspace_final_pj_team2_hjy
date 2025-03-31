import React, { useState } from "react";
import { Button, Container, DatePicker, Input, InputGroup, InputPicker, Message, Uploader } from "rsuite";
import SearchIcon from '@rsuite/icons/Search';
import './buy.css';
import BuyInsertTbl from "./BuyInsertTblBefore";
import InchargeModalForm from "../../components/InchargeModalForm";
import { _storageModalForm } from "../../components/StorageModalForm";
import { _clientModalForm } from "../../components/ClientModalForm";

const type = [
    '부가세율 적용',
    '부가세율 미적용',
].map(item => ({ label: item, value: item }));

const BuyInsert = () => {
    const [selectedIncharge, setSelectedIncharge] = useState(null);
    const [isInchargeModalOpen, setInchargeModalOpen] = useState(false);

    const handleInchargeSelect = (incharge) => {
        setSelectedIncharge(incharge);
        setInchargeModalOpen(false);
    };

    const handleOpenInchargeModal = () => {
        setInchargeModalOpen(true);
    };

    return (
        <Container>
            <Message type="info" style={{ maxWidth: 1500 }}>
                <strong>구매입력</strong>
            </Message>
            <br />
            <div className="inputBox">
                <InputGroup className="input">
                    <InputGroup.Addon style={{ width: 80 }}>
                        일자
                    </InputGroup.Addon>
                    <DatePicker />
                </InputGroup>
                <InputGroup className="input">
                    <InputGroup.Addon style={{ width: 80 }}>
                        담당자
                    </InputGroup.Addon>
                    <Input
                        placeholder='담당자 입력'
                        value={selectedIncharge ? selectedIncharge.em_name : ""}
                    />
                    <InputGroup.Addon>
                        <SearchIcon onClick={handleOpenInchargeModal} />
                    </InputGroup.Addon>
                </InputGroup>
                <InputGroup className="input">
                    <InputGroup.Addon style={{ width: 80 }}>
                        거래처
                    </InputGroup.Addon>
                    <Input placeholder='거래처' />
                    <InputGroup.Addon>
                        <SearchIcon onClick={_clientModalForm.getHandle().open} />
                    </InputGroup.Addon>
                </InputGroup>
            </div>
            <div className="inputBox">
                <InputGroup className="input">
                    <InputGroup.Addon style={{ width: 80 }}>
                        거래유형
                    </InputGroup.Addon>
                    <InputPicker placeholder='거래유형 선택' data={type} style={{ width: 224, border: 'none', height: 38 }} />
                </InputGroup>
                <InputGroup className="input">
                    <InputGroup.Addon style={{ width: 80 }}>
                        입고창고
                    </InputGroup.Addon>
                    <Input placeholder='입고창고' />
                    <InputGroup.Addon>
                        <SearchIcon onClick={_storageModalForm.getHandle().open} />
                    </InputGroup.Addon>
                </InputGroup>
                <Uploader action="//jsonplaceholder.typicode.com/posts/">
                    <Button style={{ width: 300, height: 40 }}>전표등록</Button>
                </Uploader>
            </div>
            
            <InchargeModalForm
                title="담당자 선택"
                confirm="확인"
                cancel="취소"
                onInchargeSelect={handleInchargeSelect}
                handleOpen={isInchargeModalOpen}
                handleColse={() => setInchargeModalOpen(false)}
            />
            <hr />
            <BuyInsertTbl />
            
        </Container>
    );
};

export default BuyInsert;