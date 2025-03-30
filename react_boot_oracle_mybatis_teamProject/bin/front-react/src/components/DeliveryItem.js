/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Card } from 'rsuite';
import { Link/*, useParams */ } from 'react-router-dom';
import { Table/*, Button */ } from 'rsuite';
// import '../common/css/logisCommon.css';
const { Column, HeaderCell, Cell } = Table;

const DeliveryItem = (props) => {

    const { pi_num, pi_name, pi_incharge, pi_department, pi_amount, pi_ocode } = props.delivery || {};

    console.log("pi_ocode", pi_num);

    // const[DeliveryItem, setDeliveryItem] = useState({
    //     pi_ocode:'',
    //     pi_num:'',
    //     pi_name:'',
    //     pi_incharge:'',
    //     pi_department:'',
    //     pi_amount:'',
    // }); // 초기값을 모르므로 빈배열로 boardList에 대입

    // // fetch()를 통해 서버에게 데이터를 요청
    // useEffect(() =>{ // 통신 시작 하겠다.
    //     fetch('http://localhost:8081/api2/orderItemList/' + pi_num)
    //     .then(
    //         res => res.json() // 응답이 오면 javascript object로 바꾸겠다.
    //     ).then( 
    //         res => {
    //             // console.log(1, res); // setBoardList를 통해서 뿌려준다.
    //             setDeliveryItem(res);
    //         }
    //     )
    // }, []);
    // //

    return (
        <div>

            <Table data={[props.delivery]}>
                <Column width={60} align="center" fixed>
                    <HeaderCell>품목코드 </HeaderCell>
                    <Cell dataKey="pi_num"></Cell>
                </Column>
                <Column width={60} align="center" fixed>
                    <HeaderCell>담당자 </HeaderCell>
                    <Cell dataKey="pi_incharge"></Cell>
                </Column>
                <Column width={60} align="center" fixed>
                    <HeaderCell>출고량 </HeaderCell>
                    <Cell dataKey="pi_amount"></Cell>
                </Column>
                <Column width={60} align="center" fixed>
                    <HeaderCell>요청부서 </HeaderCell>
                    <Cell dataKey="pi_department"></Cell>
                </Column>
                <Column width={60} align="center" fixed>
                    <HeaderCell>판매번호 </HeaderCell>
                    <Cell dataKey="pi_ocode"></Cell>
                </Column>
                <Column width={60} align="center" fixed>
                    <HeaderCell>현재고 </HeaderCell>
                    <Cell dataKey=""></Cell>
                </Column>
                <Column width={60} align="center" fixed>
                    <HeaderCell>거래처명 </HeaderCell>
                    <Cell dataKey=""></Cell>
                </Column>
                <Column width={60} align="center" fixed>
                    <HeaderCell>창고명 </HeaderCell>
                    <Cell dataKey=""></Cell>
                </Column>
                <Column width={150} fixed="right">
                    <HeaderCell>품목 상세보기</HeaderCell>

                    <Cell>
                        {rowData => (
                            <Link to={'/warehouse_order_itemlist/' + rowData.pi_num} className="btn btn-primary area_fit wide_fit">
                                아이템 상세
                            </Link>
                        )}
                    </Cell>
                </Column>
            </Table>
        </div>
    )
}

export default DeliveryItem;