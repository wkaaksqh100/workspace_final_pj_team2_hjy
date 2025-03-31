import { Table } from 'rsuite';
//import { mockUsers } from './mock';
import React from 'react';

const { Column, HeaderCell, Cell } = Table;
const data = [
    { division: '창고', WHCode: '000001', WHName: '1번창고'},
];

const StorageTbl = () => {

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
                    <HeaderCell style={styles}>구분</HeaderCell >
                    <Cell dataKey="division" />

                </Column>

                <Column width={230}>
                    <HeaderCell style={styles}>창고코드</HeaderCell>
                    <Cell dataKey="WHCode" />
                </Column>

                <Column width={100}>
                    <HeaderCell style={styles}>창고명</HeaderCell>
                    <Cell dataKey="WHName" />
                </Column>

            </Table>

        </>
    );
};

export default StorageTbl;