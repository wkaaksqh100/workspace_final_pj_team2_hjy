import React from 'react';
import { Card } from 'rsuite';
import { Link } from 'react-router-dom';

const WarehousingItem = (props) => {

    const{ l_code, l_name, l_stock, l_brand, l_madein, l_lack, l_floor} = props.stock || {};


    console.log("l_code", l_code);

    return (
        <div>
            
            <Card>
                <Card.Body>
                    <Card.Title>판매번호 : {l_code}</Card.Title>
                    <Card.Title>품목명 : {l_name}</Card.Title>
                    <Card.Title>재고수량 : {l_stock}</Card.Title>
                    <Card.Title>출고업체 : {l_brand}</Card.Title>
                    <Card.Title>입고입자 : {l_madein}</Card.Title>
                    <Card.Subtitle>
                        <div className='second_line'>
                            <div>
                            보관렉 번호 : {l_lack}
                            </div>
                            <div>
                            상세번호 : {l_floor}
                            </div>
                        </div>
                    </Card.Subtitle>
                    {/* <Card.Text>내용 : {b_content}</Card.Text> */}
                    <Link to={"/delivery/" + l_code} className="btn btn-primary">출고 상세보기</Link>
                </Card.Body>

            </Card>
        </div>
    )
}

export default WarehousingItem;