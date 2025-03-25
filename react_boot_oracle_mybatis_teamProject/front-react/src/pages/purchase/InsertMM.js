import { Button, ButtonToolbar, Container, DatePicker, IconButton, Input, InputGroup, InputPicker, Message, Modal, Uploader } from "rsuite";
import SearchIcon from '@rsuite/icons/Search';
import Search from "@rsuite/icons/Search";
import AddOutlineIcon from '@rsuite/icons/AddOutline';
import InsertMMTbl from "./InsertMMTbl";
import React from "react";
import SelectEmpMM from "./SelectEmpList";
import './SelectMM.css';
import SearchPRMList from "./SearchPRMList";
import SearchWHList from "./SearchWHList";

const type = [
    '부가세율 적용',
    '부가세율 미적용',
].map(item => ({ label: item, value: item }));

const InsertMM = () => {

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

            <Message type="info" style={{ width: 960 }}>
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
                    <Input placeholder='담당자 입력' />
                    <InputGroup.Addon>
                        <SearchIcon onClick={handleOpen1} />
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
                    <InputPicker placeholder='거래유형 선택' data={type} style={{ width: 224, border: 'none', height: 38 }} />
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

                <Uploader action="//jsonplaceholder.typicode.com/posts/">
                    <Button style={{ width: 300, height: 40 }}>전표등록</Button>
                </Uploader>
               
            </div>
            
                
                

            <ButtonToolbar >
                <IconButton icon={<AddOutlineIcon />}>저장</IconButton>
            </ButtonToolbar>

            <hr />
            <InsertMMTbl />

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
                    <SelectEmpMM />
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

            {/* 
            <Button appearance="primary" type="submit" style={submit}>
                Submit
            </Button>
 */}

        </Container>

    );
};

export default InsertMM;