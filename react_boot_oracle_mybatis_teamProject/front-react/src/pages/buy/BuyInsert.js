import React, { useState } from "react";
import { Container, DatePicker, Input, InputGroup, InputPicker, Message } from "rsuite";
import SearchIcon from '@rsuite/icons/Search';
import './buy.css';
import { _storageModalForm } from "../../components/StorageModalForm";
import ItemOrderList from "./ItemOrderList";
import { _productCodeModalForm } from "../../components/ProductCodeModalForm";
import BuyInputTable from "./BuyInputTable";
import EmployeeSearchModal from "../../components/EmployeeSearchModal";
import ClientSearchModal from "../../components/ClientSearchModal";
import InsertOrderItem from "./InsertOrderItem";

/* 거래유형 - 선택 데이터 */
const buyType = ["부과세율 적용", "부가세율 미적용"].map(
    (item) => ({ // 이렇게 하면, 둘다 같게 들어가서, 라벨따로 값따로 안넣어줘도 됩니다.
        label: item, // Eugenia
        value: item, // Eugenia
    })
);

const BuyInsert = () => {

    // 거래처 모달 관리
    const [selectedClient, setSelectedClient] = useState(null);
    const [selectedClientName, setSelectedClientName] = useState(null);
    const [isClientModalOpen, setClientModalOpen] = useState(false);

    const handleClientSelect = (client_code, client_name) => {
        setSelectedClient(client_code);
        setSelectedClientName(client_name);
        setClientModalOpen(false);
    };

    const handleOpenClientModal = () => {
        setClientModalOpen(true);
    };

    // 담당자 모달 관리
    const [selectedIncharge, setSelectedIncharge] = useState(null);
    const [selectedInchargeName, setSelectedInchargeName] = useState(null);
    const [isInchargeModalOpen, setInchargeModalOpen] = useState(false);

    const handleInchargeSelect = (emid, incharge) => {
        setSelectedIncharge(emid);
        setSelectedInchargeName(incharge);
        setClientModalOpen(false);
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

            <div className="inputBox" >
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
                        value={selectedIncharge || ""} readOnly
                    />
                    <InputGroup.Button tabIndex={-1}>
                        {/* 모달 열기 버튼 */}
                        <SearchIcon onClick={handleOpenInchargeModal} />
                    </InputGroup.Button>
                </InputGroup>
                <Input name="customer_1" type="text" autoComplete="off" style={{ width: 150, marginBottom: 5 }}
                    value={selectedInchargeName || ""} readOnly />

                <InputGroup className="input">
                    <InputGroup.Addon style={{ width: 80 }}>
                        거래처
                    </InputGroup.Addon>
                    <Input placeholder='거래처'
                        value={selectedClient || ""} readOnly
                    />
                    <InputGroup.Addon>
                        <SearchIcon onClick={handleOpenClientModal} />
                    </InputGroup.Addon>
                </InputGroup>
                <Input type="text" autoComplete="off" style={{ width: 150, marginBottom: 5 }}
                    value={selectedClientName || ""} readOnly />
            </div>

            <div className="inputBox">
                <InputGroup className="input">
                    <InputGroup.Addon style={{ width: 80 }}>
                        거래유형
                    </InputGroup.Addon>
                    <InputPicker
                        placeholder='거래유형 선택'
                        data={buyType}
                        style={{ width: 224, border: 'none', height: 38 }}
                    />
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
            {/* <Uploader action="//jsonplaceholder.typicode.com/posts/">
                    <Button style={{ width: 300, height: 40 }} color="green" appearance="ghost">전표등록</Button>
                </Uploader>     */}

            <EmployeeSearchModal
                title="담당자 선택"
                confirm="확인"
                cancel="취소"
                onInchargeSelect={handleInchargeSelect}	// emid, Incharge 받기
                handleOpen={isInchargeModalOpen}
                handleColse={() => setInchargeModalOpen(false)}
            />

            <ClientSearchModal
                title="거래처 선택"
                confirm="확인"
                cancel="취소"
                onClientSelect={handleClientSelect}	// client_code, client_name 받기
                handleOpen={isClientModalOpen}
                handleColse={() => setClientModalOpen(false)}
            />

            <hr />
            {/* <BuyInsertTbl /> */}
            <BuyInputTable />

            <hr />    
            <InsertOrderItem /> 

            <hr />
            <ItemOrderList />

        </Container>
    );
};

export default BuyInsert;