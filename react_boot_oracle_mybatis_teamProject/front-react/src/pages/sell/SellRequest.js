import React from "react";
import { Message } from 'rsuite';
import "../../resource/Sell_maintitle.css";

const SellRequest = () => {

    return (
        <div>
            <Message type="info" bordered showIcon className="main_title">
            구매 물품/거래처 등록 요청
    		</Message>
            
        </div>
    );
};

export default SellRequest;