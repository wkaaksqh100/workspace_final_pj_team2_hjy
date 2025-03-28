
import React from "react";
import searchIMG from '../../../resource/sell_image/물품 검색.png'
import { Button, Form, InputGroup, AutoComplete, HStack } from "rsuite";
import SearchIcon from '@rsuite/icons/Search';
import "../../../resource/Sell_maintitle.css";

const styles = {
	width: 150,
	marginBottom: 5
  };


const SellSearchModal = () => {

    return(

		
        <div>
            {/* 판매 물품 검색창 */}
			
            <Form className="addForm" layout="inline">

                <div className="form_div">
					<Form.Group controlId="customer_1">
						<HStack>
							<Form.ControlLabel style={{ marginRight: 30, fontSize: 17 }}>품목코드</Form.ControlLabel>
							<InputGroup style={styles}>
								<AutoComplete />
									<InputGroup.Button tabIndex={-1}>
										<SearchIcon />
									</InputGroup.Button>
							</InputGroup>
							<Form.Control name="customer_1" type="text" autoComplete="off" style={{ width: 200,  marginBottom: 5 }} />
						</HStack>
					</Form.Group>
                </div>

				<div className="form_div">
					<Form.Group controlId="customer_1">
						<HStack>
							<Form.ControlLabel style={{ marginRight: 45, fontSize: 17 }}>품목명</Form.ControlLabel>
							<InputGroup style={styles}>
								<AutoComplete />
									<InputGroup.Button tabIndex={-1}>
										<SearchIcon />
									</InputGroup.Button>
							</InputGroup>
							<Form.Control name="customer_1" type="text" autoComplete="off" style={{ width: 200,  marginBottom: 5 }} />
						</HStack>
					</Form.Group>
                </div>
                <div className="form_div">
					<Form.Group controlId="customer_2">
						<HStack>
							<Form.ControlLabel style={{ marginRight: 45, fontSize: 17 }}>거래처</Form.ControlLabel>
							<InputGroup style={styles}>
								<AutoComplete />
									<InputGroup.Button tabIndex={-1}>
										<SearchIcon />
									</InputGroup.Button>
							</InputGroup>
							<Form.Control name="customer_2" type="text" autoComplete="off" style={{ width: 200, marginBottom: 5, marginRight: 70 }} />
						</HStack>
					</Form.Group>
				</div>
                <div className="form_div">
					<Form.Group controlId="storage">
						<HStack>
							<Form.ControlLabel style={{ marginRight: 30, fontSize: 17 }}>출하창고</Form.ControlLabel>
							<InputGroup style={styles}>
								<AutoComplete />
									<InputGroup.Button tabIndex={-1}>
										<SearchIcon />
									</InputGroup.Button>
							</InputGroup>
							<Form.Control name="storage" type="text" autoComplete="off" style={{ width: 200, marginBottom: 5 }} />
						</HStack>
					</Form.Group>
					</div>

                    <Button appearance="primary">
                        검색
                    </Button>
                    <Button appearance="subtle">
                        닫기
                    </Button>
                </Form>

        </div>
    );
};

export default SellSearchModal;