import { Container, Tabs, Message, InputGroup, Input } from "rsuite";
import React from "react";
import PageMM from "./PageMM";
import SearchIcon from '@rsuite/icons/Search';
import './buy.css';
import BuySearchTbl from "./BuySearchTbl";

const BuySearch = () => {

    return (
      
        <Container>

            <Message type="info" style={{ width: 960 }}>
                <strong>구매조회</strong>
            </Message>
            <br />
            
            <div className="MM_search_bar">
            <InputGroup >
                <Input />
                <InputGroup.Button>
                    <SearchIcon />
                </InputGroup.Button>
            </InputGroup>
            </div>

            <Tabs defaultActiveKey="1" style={{ width: 960 }}>
                <Tabs.Tab eventKey="1" title="전체">
                    <Container>
                        <BuySearchTbl />
                        <PageMM />
                    </Container>
                </Tabs.Tab>

                <Tabs.Tab eventKey="2" title="결재중">
                    <Container>
                         <BuySearchTbl />
                        <PageMM />
                    </Container>
                </Tabs.Tab>

                <Tabs.Tab eventKey="3" title="미확인">
                    <Container>
                        <BuySearchTbl />
                        <PageMM />
                    </Container>
                </Tabs.Tab>

                <Tabs.Tab eventKey="4" title="확인">
                    <Container>
                        <BuySearchTbl />
                        <PageMM />
                    </Container>
                </Tabs.Tab>
            </Tabs>

        </Container>

    );

};

export default BuySearch;