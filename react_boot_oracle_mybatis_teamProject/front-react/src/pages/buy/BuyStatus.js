import { Button, Container, DateRangePicker, Input, InputGroup, InputPicker, Message, Modal, Tabs } from "rsuite"
import SearchIcon from '@rsuite/icons/Search';
import Search from "@rsuite/icons/Search";
import StatusMMTbl from "./StatusMMTbl";
import './buy.css';
import SearchPRMList from "./SearchPRMList";
import SelectEmpList from "./SelectEmpList";
import React from "react";
import SearchWHList from "./SearchWHList";
import { _modalForm } from "../../components/ModalForm";

const type = [
    '부가세율 적용',
    '부가세율 미적용',
].map(item => ({ label: item, value: item }));

const search = {
    width: 100
}

const BuyStatus = () => {

    // 인쇄 모달
    const [open1, setOpen1] = React.useState(false);
    const handleOpen1 = () => setOpen1(true);
    const handleClose1 = () => setOpen1(false);

    // 불러온 전표
    const [open2, setOpen2] = React.useState(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);

    // 불러온 전표
    const [open3, setOpen3] = React.useState(false);
    const handleOpen3 = () => setOpen3(true);
    const handleClose3 = () => setOpen3(false);

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
                        <Input placeholder='담당자 입력' />
                        <InputGroup.Addon>
                            <SearchIcon onClick={_modalForm.getHandle().open} />
                        </InputGroup.Addon>
                    </InputGroup>

                    <InputGroup className="input">
                        <InputGroup.Addon style={{ width: 80 }}>
                            거래처
                        </InputGroup.Addon>
                        <Input placeholder='거래처' />
                        <InputGroup.Addon>
                            <SearchIcon onClick={handleOpen2} />
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
                            <SearchIcon onClick={handleOpen3} />
                        </InputGroup.Addon>
                    </InputGroup>

                    <InputGroup className="input">
                        <InputGroup.Addon style={{ width: 80 }}>
                            품목코드
                        </InputGroup.Addon>
                        <Input placeholder='전표등록' />
                        <InputGroup.Addon>
                            <SearchIcon onClick={Search} />
                        </InputGroup.Addon>
                    </InputGroup>
                </div>

                <Button appearance="primary" type="submit" style={search}>
                    검색
                </Button>
                <hr />

                <StatusMMTbl />

                {/* 담당자 돋보기 버튼 클릭시 모달 상세 */}
                <Modal open={open1} onClose={handleClose1}>
                    <Modal.Header>
                        <Modal.Title>사원검색</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <InputGroup className="SearchEMP">
                            <Input />
                            <InputGroup.Button>
                                <SearchIcon />
                            </InputGroup.Button>
                        </InputGroup>
                        <SelectEmpList />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={handleClose1} appearance="primary">
                            신규
                        </Button>
                        <Button onClick={handleClose1} appearance="subtle">
                            닫기
                        </Button>
                    </Modal.Footer>
                </Modal>

                {/* 불러온전표 버튼 클릭시 모달 상세 */}
                <Modal open={open2} onClose={handleClose2}>
                    <Modal.Header>
                        <Modal.Title>거래처검색</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <InputGroup className="SearchEMP">
                            <Input />
                            <InputGroup.Button>
                                <SearchIcon />
                            </InputGroup.Button>
                        </InputGroup>
                        <SearchPRMList />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={handleClose2} appearance="subtle">
                            닫기
                        </Button>
                    </Modal.Footer>
                </Modal>

                {/* 불러온전표 버튼 클릭시 모달 상세 */}
                <Modal open={open3} onClose={handleClose3}>
                    <Modal.Header>
                        <Modal.Title>창고검색</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <InputGroup className="SearchEMP">
                            <Input />
                            <InputGroup.Button>
                                <SearchIcon />
                            </InputGroup.Button>
                        </InputGroup>
                        <SearchWHList />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={handleClose3} appearance="primary">
                            신규
                        </Button>
                        <Button onClick={handleClose3} appearance="subtle">
                            닫기
                        </Button>
                    </Modal.Footer>
                </Modal>

            </>
        </Container>

    );
};

export default BuyStatus;
