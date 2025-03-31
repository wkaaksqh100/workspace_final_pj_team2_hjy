import { Table, Button, Modal, InputGroup, Input } from 'rsuite';
//import { mockUsers } from './mock';
import React from 'react';

const { Column, HeaderCell, Cell } = Table;
const data = [
    { employeeCode: 'M034', EmployeeName: "이동욱"},
];

const InchargeTbl = () => {

    const styles = {
        //width: 960,
        //marginBottom: 10,
        backgroundColor: '#f8f9fa',
    };

    return (
        <>
            <Table
                height={500}
                data={data}
                onRowClick={rowData => {
                    console.log(rowData);
                }}
            >
                  
                <Column width={200} align="center" fixed >
                    <HeaderCell style={styles}>사원코드</HeaderCell >
                    <Cell dataKey="employeeCode" >
                    
                    </Cell>
                </Column>

                <Column width={200}>
                    <HeaderCell style={styles}>사원명</HeaderCell>
                    <Cell dataKey="EmployeeName" />
                </Column>

            </Table>

        </>
    );
};

export default InchargeTbl;