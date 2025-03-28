import React, { useState, useEffect } from 'react';
import { Container } from 'rsuite';
import DeliveryItem from './DeliveryItem';

const DeliveryItemList = () => {
    // const [DeliveryItemList, setDeliveryItemList] = useState({
    //     pi_ocode: '',
    //     pi_num: '',
    //     pi_name: '',
    //     pi_incharge: '',
    //     pi_department: '',
    //     pi_amount: '',
    // }); // 초기값을 모르므로 빈배열로 boardList에 대입

    let [deliveryItemList, setDeliveryItemList] = useState([]);
    deliveryItemList = [
        {
            "pi_ocode": 2,
            "pi_name": "나또 외",
            "pi_incharge": "지과장",
            "pi_department": "판매3팀",
        }
    ];
    // fetch()를 통해 서버에게 데이터를 요청
    // useEffect(() => { // 통신 시작 하겠다.
    //     fetch('http://localhost:8081/api4/orderList/', { // 스프링부트에 요청한다.
    //         method: "GET" // "GET" 방식으로
    //     }).then(
    //         res => res.json() // 응답이 오면 javascript object로 바꾸겠다.
    //     ).then(
    //         res => {
    //             // console.log(1, res); // setBoardList를 통해서 뿌려준다.
    //             setDeliveryItemList(res);
    //         }
    //     )
    // }, []);


    return (
        <div>
            <Container>
                {deliveryItemList.map(delivery =>
                    <DeliveryItem key={delivery.pi_ocode} delivery={delivery} />
                )}
            </Container>
        </div>
    )
}

export default DeliveryItemList;