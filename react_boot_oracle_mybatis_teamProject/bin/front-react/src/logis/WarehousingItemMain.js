import React, { useEffect, useState  } from 'react';
import { Link } from 'react-router-dom';
import { Table/*, Button */ } from 'rsuite';
const { Column, HeaderCell, Cell } = Table;

const WarehouseList = () => {

    let [warehouseList, setWarehouseList] = useState([]); // 초기값을 모르므로 빈배열로 warehouseList에 대입
    warehouseList = [
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

    // fetch()를 통해 서버에게 데이터를 요청
    // useEffect(() =>{ // 통신 시작 하겠다.
    //     fetch("http://localhost:8081/api/warehouseList", { // 스프링부트에 요청한다.
    //         method: "GET" // "GET" 방식으로
    //     }).then(
    //         res => res.json() // 응답이 오면 javascript object로 바꾸겠다.
    //     ).then( 
    //         res => {
    //             // console.log(1, res); // setWarehouseList를 통해서 뿌려준다.
    //             setWarehouseList(res);
    //             console.log("warehouseList  res : ", res)
    //             console.log("warehouseList : ", warehouseList)
    //         }
    //     )
    // }, []);

    return (
        <div className='div_for_receiving'>
            <div className='header logiHeader'>
                금일 입고 현황 - warehouseList
            </div>
            <Table
                data={warehouseList}
                height={400}
                className="text_center overflow_scroll for_main"
            >
                <Column width={60} align="center" fixed>
                    <HeaderCell>품목코드</HeaderCell>
                    <Cell dataKey="l_code" />
                </Column>

                <Column width={150}>
                    <HeaderCell>품목명</HeaderCell>
                    <Cell dataKey="l_name" />
                </Column>

                <Column width={80}>
                    <HeaderCell>입고일자</HeaderCell>
                    <Cell dataKey="l_madein" />
                </Column>

                <Column width={80}>
                    <HeaderCell>입고창고명</HeaderCell>
                    <Cell dataKey="l_warehouse" />
                </Column>

                <Column width={100}>
                    <HeaderCell>업체명 </HeaderCell>
                    <Cell dataKey="w_madeby" />
                </Column>

                <Column width={100}>
                    <HeaderCell>담당자명 </HeaderCell>
                    <Cell dataKey="w_incharge" />
                </Column>

                <Column width={80} fixed="right">
                    <HeaderCell>담당부서</HeaderCell>
                    <Cell dataKey="w_department" />
                </Column>

                <Column width={200} fixed="right">
                    <HeaderCell>상세보기</HeaderCell>

                    <Cell style={{ padding: '6px' }}>
                        {warehouseList =>
                            <Link key={warehouseList.l_code} to={'/main/warehouse_detail/' + warehouseList.l_code} className="btn btn-primary area_fit wide_fit">입고상세보기</Link>
                        }
                    </Cell>
                </Column>
            </Table>
        </div>
    )
}

export default WarehouseList;