import { Container, Content, Placeholder, Tabs } from "rsuite"

const StockStatus = () => {
    return (

        <Container>
            <>
                <h5>입고 현황</h5><br />
               
                <Tabs defaultActiveKey="1">
                    <Tabs.Tab eventKey="1" title="입고 내역">
                        <Content>
                           
                        </Content>

                    </Tabs.Tab>
                    <Tabs.Tab eventKey="2" title="입고전표 등록">
                        <Placeholder.Paragraph graph="square" />
                    </Tabs.Tab>
                  
                </Tabs>


            </>
        </Container>

    )
}

export default StockStatus;