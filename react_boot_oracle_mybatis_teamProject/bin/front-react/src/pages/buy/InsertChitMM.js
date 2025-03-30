import { ButtonToolbar, Container, DatePicker, IconButton, Input, InputGroup, InputPicker, Message } from "rsuite";
import SearchIcon from '@rsuite/icons/Search';
import Search from "@rsuite/icons/Search";
import AddOutlineIcon from '@rsuite/icons/AddOutline';
import React from "react";
import InsertOrderMMTbl from "./InsertOrderMMTbl";

const type = [
    '부가세율 적용',
    '부가세율 미적용',
].map(item => ({ label: item, value: item }));

const OrderMMInsert = () => {

    const inputBox = {
        display: 'flex',
        justifyContent: 'space-between', 
        width: "960px",
        marginBottom: 10
    };

    const input = {
        display: 'flex',
        justifyContent: 'space-between', 
        width: "300px",
        //marginBottom: 10
    };

    return (

        <Container>

            <Message type="info">
                <strong>발주서입력</strong>
            </Message>
            <br />

            <div style={inputBox}>
                <InputGroup style={input}>
                    <InputGroup.Addon style={{width: 80}}>
                        일자
                    </InputGroup.Addon>
                    <DatePicker />
                </InputGroup>

                <InputGroup style={input}>
                    <InputGroup.Addon style={{width: 80}}>
                        담당자
                    </InputGroup.Addon>
                    <Input placeholder='담당자 입력'/>
                    <InputGroup.Addon>
                        <SearchIcon onClick={Search} />
                    </InputGroup.Addon>
                </InputGroup>

                <InputGroup style={input}>
                    <InputGroup.Addon style={{width: 80}}>
                        거래처
                    </InputGroup.Addon>
                    <Input placeholder='거래처'/>
                    <InputGroup.Addon>
                        <SearchIcon onClick={Search} />
                    </InputGroup.Addon>
                </InputGroup>
            </div>

            <div style={inputBox}>  
                <InputGroup style={input}>
                    <InputGroup.Addon style={{width: 80}}>
                        거래유형
                    </InputGroup.Addon>
                    <InputPicker placeholder='거래유형 선택'  data={type} style={{ width: 224, border: 'none' }} />
                </InputGroup>

                <InputGroup style={input}>
                    <InputGroup.Addon style={{width: 80}}>
                        입고창고
                    </InputGroup.Addon>
                    <Input placeholder='입고창고'/>
                    <InputGroup.Addon>
                        <SearchIcon onClick={Search} />
                    </InputGroup.Addon>
                </InputGroup>
 
                <InputGroup style={input}>
                    <InputGroup.Addon style={{width: 80}}>
                        전표등록
                    </InputGroup.Addon>
                    <Input placeholder='전표등록'/>
                    <InputGroup.Addon>
                        <SearchIcon onClick={Search} />
                    </InputGroup.Addon>
                </InputGroup>
            </div>  
            
            <ButtonToolbar >
                <IconButton icon={<AddOutlineIcon />}>저장</IconButton>
            </ButtonToolbar>       

            <hr />

            <InsertOrderMMTbl /> 
            
{/* 
            <Button appearance="primary" type="submit" style={submit}>
                Submit
            </Button>
 */}
            
        </Container>
    );
};

export default OrderMMInsert;