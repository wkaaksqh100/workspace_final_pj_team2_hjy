import {React, useEffect, useState } from 'react';
import { /* Button,*/ Card, CardBody, CardText, CardTitle } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import '../common/css/logisCommon.css'
//import { useNavigate } from 'react-router-dom';

const Detail = (props) => {
    // const navigator = useNavigate();
    
    const propsParam = useParams();
    const l_code = propsParam.l_code;

    console.log("l_code : ", l_code)

    const [ stock, setStockDetail ] = useState({
        l_name:'',
        l_stock:'',
        l_brand:'',
        l_madein:'',
        l_lack:'',
        l_floor:'',
        l_warehouse:'',
    });

    let warehouseList = [
        {
            "l_code": 1,
            "l_name": "O-ring(50mm)",
            "l_madein": "2012-11-11",
            "l_warehouse": "파주지점",
            "w_madeby": "삼성",
            "w_incharge": "문희재",
            "w_department": "물류1팀",
        },
        {
            "l_code": 2,
            "l_name": "O-ring(100mm)",
            "l_madein": "2012-12-07",
            "l_warehouse": "용산지점",
            "w_madeby": "삼성",
            "w_incharge": "문희재",
            "w_department": "물류1팀",
        }
    ];

    // useEffect(()=>{
    //     fetch('http://localhost:8081/api3/detail/' + l_code)
    //     .then(res => res.json())
    //     .then(res => {
    //         console.log("res : ", res)
    //         setStockDetail(res)
    //     })
    //     .catch(err => console.error('Error fetching board:', err));
    // },[]);

    // // 수정
    // const updateBoard = () =>{
    //     navigator(`/updateForm/${b_num}`); // App.js의 Router에서 UpdateForm 호출출
    // }

    // // 삭제
    // const deleteBoard = () =>{
    //     fetch('http://localhost:8081/api/board/' + b_num , {
    //         method: "DELETE",
    //     })
    //     .then((res) => res.text())
    //     .then((res) =>{
    //         if(res === "삭제완료"){
    //             navigator('/boardList'); // 게시글 목록으로 이동
    //         } else{
    //             alert('삭제 실패') // catch로 변경해도 된다.
    //         }
    //     })
    // }

    return (
        <div>
            <div className='header logiHeader' style={{marginBottom:10 + 'px'}}>
                품목 상세 - Detail
            </div>
            <Card>
                <CardBody className='text_center'>
                    <CardTitle className='border_black_1px'>품목코드 : {propsParam.l_code}</CardTitle>
                    <CardText className='border_black_1px'><div>품목명 : {warehouseList[propsParam.l_code - 1].l_name} </div></CardText>
                    <CardText className='border_black_1px'><div>재고량 : {warehouseList[propsParam.l_code - 1].l_stock} pcs</div></CardText>
                    <CardText className='border_black_1px'>거래처명 : {warehouseList[propsParam.l_code - 1].l_brand}</CardText>
                    <CardText className='border_black_1px'>입고창고 : {warehouseList[propsParam.l_code - 1].l_warehouse}</CardText>
                    <CardText className='border_black_1px'>기존 재고 위치 : {warehouseList[propsParam.l_code - 1].l_lack} - {stock.l_floor}</CardText>
                   
                </CardBody>
            </Card>
        </div>
    )
}

export default Detail;