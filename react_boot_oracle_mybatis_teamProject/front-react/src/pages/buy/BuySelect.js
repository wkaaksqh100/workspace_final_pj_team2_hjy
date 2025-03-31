import { Container, Tabs, Message, InputGroup, Input } from "rsuite";
import React from "react";
import SearchIcon from '@rsuite/icons/Search';
import './buy.css';
import BuySelectTbl from "./BuySelectTbl";
import Paging from "./Paging";

const BuySelect = () => {

    return (
        <>
        <Container>

            <Message type="info" style={{ maxWidth: 1500 }}>
                <strong>구매조회</strong>
            </Message>
            <br />
            
            {/* 검색바 */}
            <div className="MM_search_bar">
            <InputGroup >
                <Input />
                <InputGroup.Button>
                    <SearchIcon />
                </InputGroup.Button>
            </InputGroup>
            </div>

            {/* 전체 / 결재중 /미확인 / 확인 탭 */}
            <Tabs defaultActiveKey="1" style={{ maxWidth: 1500 }}>
                <Tabs.Tab eventKey="1" title="전체">
                    <Container>
                        <BuySelectTbl />
                        <Paging />
                    </Container>
                </Tabs.Tab>

                <Tabs.Tab eventKey="2" title="결재중">
                    <Container>
                         <BuySelectTbl />
                        <Paging />
                    </Container>
                </Tabs.Tab>

                <Tabs.Tab eventKey="3" title="미확인">
                    <Container>
                        <BuySelectTbl />
                        <Paging />
                    </Container>
                </Tabs.Tab>

                <Tabs.Tab eventKey="4" title="확인">
                    <Container>
                        <BuySelectTbl />
                        <Paging />
                    </Container>
                </Tabs.Tab>
            </Tabs>

        </Container>
        </>
    );

};

export default BuySelect;