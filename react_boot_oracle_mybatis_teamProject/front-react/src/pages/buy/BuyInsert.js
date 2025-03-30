import { Button, ButtonToolbar, Container, DatePicker, IconButton, Input, InputGroup, InputPicker, Message, Modal, Uploader } from "rsuite";
import SearchIcon from '@rsuite/icons/Search';
//import AddOutlineIcon from '@rsuite/icons/AddOutline';
import React, { useState } from "react";
import './buy.css';
import { _modalForm } from "../../components/ModalForm";
import SearchStorage from "./SearchStorage";
import BuyInsertTbl from "./BuyInsertTbl";


const type = [
    '부가세율 적용',
    '부가세율 미적용',
].map(item => ({ label: item, value: item }));

const BuyInsert = () => {

    // const [isModalOpen, setIsModalOpen] = useState(false);

    // const handleSearchIconClick = () => {
    //     setIsModalOpen(true);
    // };

    // const handleModalClose = () => {
    //     setIsModalOpen(false);
    // };

    // // 불러온 전표
    // const [open2, setOpen2] = React.useState(false);
    // const handleOpen2 = () => setOpen2(true);
    // const handleClose2 = () => setOpen2(false);

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
                        <SearchIcon onClick={_modalForm.getHandle().open}/>
                    </InputGroup.Addon>
                </InputGroup>

                <InputGroup className="input">
                    <InputGroup.Addon style={{ width: 80 }}>
                        거래처
                    </InputGroup.Addon>
                    <Input placeholder='거래처' />
                    <InputGroup.Addon>
                        <SearchIcon />
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
       
            <hr />
            <BuyInsertTbl />

            {/* 담당자 돋보기 버튼 클릭시 모달 상세 */}
      

            {/* 불러온전표 버튼 클릭시 모달 상세 */}
            {/* <Modal open={open2} onClose={handleClose2}>
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
            </Modal> */}

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
                    <SearchStorage />
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

export default BuyInsert;