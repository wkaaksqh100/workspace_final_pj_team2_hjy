import { Table } from 'rsuite';
//import { mockUsers } from './mock';
import React from 'react';

const { Column, HeaderCell, Cell } = Table;
const data = [
    { id: 1, date: "2025-03-20", CustomerName: "풀무원", ItemName: "콩나물", TotalAmount: "1,000,000", TransactionType: "부가세율 적용", WarehouseName: "파주물류창고", account: "X", print: "인쇄", chit: "조회" },
];

const StatusMMTbl = () => {

    const styles = {
        //width: 960,
        //marginBottom: 10,
        backgroundColor: '#f8f9fa',
    };

    return (
        <Table
            height={400}
            width={960}
            data={data}
            onRowClick={rowData => {
                console.log(rowData);
            }}
        >

            <Column width={160}>
                <HeaderCell style={styles}>일자-No.</HeaderCell>
                <Cell dataKey="date" />
            </Column>

            <Column width={160}>
                <HeaderCell style={styles}>거래처명</HeaderCell>
                <Cell dataKey="CustomerName" />
            </Column>

            <Column width={160}>
                <HeaderCell style={styles}>품목명 [규격]</HeaderCell>
                <Cell dataKey="ItemName" />
            </Column>

            <Column width={160}>
                <HeaderCell style={styles}>수량</HeaderCell>
                <Cell dataKey="TotalAmount" />
            </Column>

            <Column width={160}>
                <HeaderCell style={styles}>단가</HeaderCell>
                <Cell dataKey="TransactionType" />
            </Column>

            <Column width={160}>
                <HeaderCell style={styles}>금액</HeaderCell>
                <Cell dataKey="WarehouseName" />
            </Column>
        </Table>
    );
};

export default StatusMMTbl;