import React from 'react';
import { Card } from 'rsuite';
import { Link } from 'react-router-dom';

const WarehousingItem = (props) => {

    const{ b_num, b_title, b_writer, b_read_cnt, b_reg_date} = props.warehousing || {};

    console.log("b_num", b_num);

    return (
        <div>
            
            <Card>
                <Card.Body>
                    <Card.Title>품목코드 : {b_num}</Card.Title>
                    <Card.Title>출고일자 : {b_reg_date}</Card.Title>
                    <Card.Title>보관창고명 : {b_title}</Card.Title>
                    <Card.Subtitle>
                        <div className='second_line'>
                            <div>
                            보관렉 번호 : {b_read_cnt}
                            </div>
                            <div>
                            상세번호 : {b_writer}
                            </div>
                        </div>
                        
                    </Card.Subtitle>
                    {/* <Card.Text>내용 : {b_content}</Card.Text> */}
                    <Link to={"/detail/" + b_num} className="btn btn-primary">상세보기</Link>
                </Card.Body>

            </Card>
        </div>
    )
}

export default WarehousingItem;