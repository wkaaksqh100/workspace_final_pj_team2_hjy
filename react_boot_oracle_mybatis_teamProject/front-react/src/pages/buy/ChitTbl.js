import { Table } from 'rsuite';
//import { mockUsers } from './mock';
import React from 'react';

const { Column, HeaderCell, Cell } = Table;
const data = [
    { productCode: 'J1263', itemName: '두부', standard: '15*15*8', TotalAmount: 100, chit: '', chitDate: "2025-03-20"},
];

const ChitTbl = () => {

    const styles = {
        //width: 960,
        //marginBottom: 10,
        backgroundColor: '#f8f9fa',

    };

    return (
        <>
            <Table
                height={400}
                data={data}
                onRowClick={rowData => {
                    console.log(rowData);
                }}
            >
                <Column width={100} align="center" fixed >
                    <HeaderCell style={styles}>품목코드</HeaderCell >
                    <Cell dataKey="productCode" />

                </Column>

                <Column width={100}>
                    <HeaderCell style={styles}>품목명</HeaderCell>
                    <Cell dataKey="itemName" />
                </Column>

                <Column width={100}>
                    <HeaderCell style={styles}>규격</HeaderCell>
                    <Cell dataKey="standard" />
                </Column>

                <Column width={80}>
                    <HeaderCell style={styles}>수량</HeaderCell>
                    <Cell dataKey="TotalAmount" />
                </Column>

                <Column width={100}>
                    <HeaderCell style={styles}>불러온 전표</HeaderCell>
                    <Cell dataKey="chit" />
                </Column>

                <Column width={150}>
                    <HeaderCell style={styles}>불러온 전표일자-No.</HeaderCell>
                    <Cell dataKey="chitDate" />
                </Column>

            </Table>


        </>
    );
};

export default ChitTbl;