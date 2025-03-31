import { Button, Container, DateRangePicker, Input, InputGroup, InputPicker, Message } from "rsuite"
import SearchIcon from '@rsuite/icons/Search';
import './buy.css';
import React, { useState } from "react";
import StatusSelectTbl from "./StatusSelectTbl";
import { _clientModalForm } from "../../components/ClientModalForm";
import { _storageModalForm } from "../../components/StorageModalForm";
import InchargeModalForm from "../../components/InchargeModalForm";
import { _productCodeModalForm } from "../../components/ProductCodeModalForm";

const type = [
    '부가세율 적용',
    '부가세율 미적용',
].map(item => ({ label: item, value: item }));

const search = {
    width: 100
}

const BuyStatus = () => {
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
            <>
                <Message type="info" style={{ width: 960 }}>
                    <strong>구매현황</strong>
                </Message>
                <br />

                <div className="inputBox">
                    <InputGroup className="input">
                        <InputGroup.Addon style={{ width: 80 }}>
                            기준일자
                        </InputGroup.Addon>
                        <DateRangePicker />
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
                        <InputPicker placeholder='거래유형 선택' data={type} style={{ width: 224, border: 'none' }} />
                    </InputGroup>

                    <InputGroup className="input">
                        <InputGroup.Addon style={{ width: 80 }}>
                            입고창고
                        </InputGroup.Addon>
                        <Input placeholder='입고창고' />
                        <InputGroup.Addon>
                            <SearchIcon onClick={_storageModalForm.getHandle().open}/>
                        </InputGroup.Addon>
                    </InputGroup>

                    <InputGroup className="input">
                        <InputGroup.Addon style={{ width: 80 }}>
                            품목코드
                        </InputGroup.Addon>
                        <Input placeholder='품목코드' />
                        <InputGroup.Addon>
                            <SearchIcon onClick={_productCodeModalForm.getHandle().open} />
                        </InputGroup.Addon>
                    </InputGroup>
                </div>

                <Button appearance="primary" type="submit" style={search}>
                    검색
                </Button>
                <hr />

                <StatusSelectTbl />
                <InchargeModalForm
                                title="담당자 선택"
                                confirm="확인"
                                cancel="취소"
                                onInchargeSelect={handleInchargeSelect}
                                handleOpen={isInchargeModalOpen}
                                handleColse={() => setInchargeModalOpen(false)}
                            />
            </>
        </Container>

    );
};

export default BuyStatus;
