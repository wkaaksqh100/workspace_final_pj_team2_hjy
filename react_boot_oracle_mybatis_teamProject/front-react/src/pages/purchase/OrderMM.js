import { Button, Container, Content, Message, Tabs } from "rsuite"
import OrderMMAll from "./OrderMMAll";
import OrderMMIng from "./OrderMMIng";
import OrderMMAllYet from "./OrderMMAllYet";
import OrderMMAllDone from "./OrderMMAllDone";
import OrderMMAllCheck from "./OrderMMAllCheck";
import OrderMMAllPaying from "./OrderMMAllPaying";
import React from "react";
import { useNavigate } from 'react-router-dom';
import PageMM from "./PageMM";

const OrderMM = () => {


    const navigate = useNavigate(); // navigate 훅을 사용하여 페이지 이동 함수 생성


    const handleClick = () => {
        navigate('/OrderMMInsert')
    };

    const submit = {
        width: 100
    }

    return (

        <Container>
            <>
                <Message type="info" style={{ width: 960 }}>
                    <strong>발주서 관리</strong>
                </Message>
                <br />

                <Tabs defaultActiveKey="1" style={{ width: 960 }}>
                    <Tabs.Tab eventKey="1" title="전체">
                        <OrderMMAll />
                        <PageMM />
                        <hr />
                        <Button appearance="primary" type="submit" style={submit} onClick={handleClick}>
                            신규등록
                        </Button>

                    </Tabs.Tab>

                    <Tabs.Tab eventKey="2" title="결재중">
                        <OrderMMAllPaying />
                        <PageMM />
                        <hr />
                        <Button appearance="primary" type="submit" style={submit} onClick={handleClick}>
                            신규등록
                        </Button>
                    </Tabs.Tab>

                    <Tabs.Tab eventKey="3" title="미확인">
                        <OrderMMAllYet />
                        <PageMM />
                        <hr />
                        <Button appearance="primary" type="submit" style={submit} onClick={handleClick}>
                            신규등록
                        </Button>
                    </Tabs.Tab>

                    <Tabs.Tab eventKey="4" title="확인">
                        <OrderMMAllCheck />
                        <PageMM />
                        <hr />
                        <Button appearance="primary" type="submit" style={submit} onClick={handleClick}>
                            신규등록
                        </Button>
                    </Tabs.Tab>

                    <Tabs.Tab eventKey="5" title="완료">
                        <OrderMMAllDone />
                        <PageMM />
                        <hr />
                        <Button appearance="primary" type="submit" style={submit} onClick={handleClick}>
                            신규등록
                        </Button>
                    </Tabs.Tab>

                    <Tabs.Tab eventKey="6" title="진행중">
                        <OrderMMIng />
                        <PageMM />
                        <hr />
                        <Button appearance="primary" type="submit" style={submit} onClick={handleClick}>
                            신규등록
                        </Button>
                    </Tabs.Tab>

                </Tabs>
            </>
        </Container>

    );
};

export default OrderMM;