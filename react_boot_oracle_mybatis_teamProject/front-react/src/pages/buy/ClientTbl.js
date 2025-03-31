import { Button, Modal, Table } from 'rsuite';
//import { mockUsers } from './mock';
import React from 'react';

const { Column, HeaderCell, Cell } = Table;
const data = [
    { customerCode: '0048231', customerName: '유어마인드', details: '내역'},
];

const ClientTbl = () => {

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
                <Column width={230} align="center" fixed >
                    <HeaderCell style={styles}>거래처코드</HeaderCell >
                    <Cell dataKey="customerCode" />

                </Column>

                <Column width={230}>
                    <HeaderCell style={styles}>거래처명</HeaderCell>
                    <Cell dataKey="customerName" />
                </Column>

                <Column width={100}>
                    <HeaderCell style={styles}>상세내역</HeaderCell>
                    <Cell style={{ padding: '6px' }}>
                        {rowData => (
                            <Button color="yellow" appearance='link'>
                                내역
                            </Button>
                        )}
                    </Cell>
                </Column>

            </Table>
        </>
    );
};

export default ClientTbl;