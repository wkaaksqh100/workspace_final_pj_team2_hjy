import React, { useState, useEffect } from 'react';
import { Link  } from 'react-router-dom';
import { Table/*, Button */ } from 'rsuite';
import '../common/css/logisCommon.css';
const { Column, HeaderCell, Cell } = Table;

const WarehouseList = () => {

    const[warehouseList, setWarehouseList] = useState([]); // 초기값을 모르므로 빈배열로 warehouseList에 대입

    // fetch()를 통해 서버에게 데이터를 요청
    // useEffect(() =>{ // 통신 시작 하겠다.
    //     fetch("http://localhost:8081/api3/stockList", { // 스프링부트에 요청한다.
    //         method: "GET" // "GET" 방식으로
    //     }).then(
    //         res => res.json() // 응답이 오면 javascript object로 바꾸겠다.
    //     ).then( 
    //         res => {
    //             // console.log(1, res); // setWarehouseList를 통해서 뿌려준다.
    //             setWarehouseList(res);
    //             console.log("stockList  res : ", res)
    //             console.log("stockList : ", warehouseList)
    //         }
    //     )
    // }, []);
    // []은 디펜던시인데, setState()로 렌더링 될 때마다 실행되면 안되고, 한 번만 실행하도록 빕배여ㅕ르ㅏㅏ

    return (
        <div>
          <div className='header logiHeader'>
            창고관리
          </div>
        <Table
        data={warehouseList}
        height={400}
        className="text_center"
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
          <HeaderCell>현 재고</HeaderCell>
          <Cell dataKey="l_stock" />
        </Column>

        <Column width={80}>
          <HeaderCell>안전 재고</HeaderCell>
          <Cell dataKey="l_safe_stock" />
        </Column>

        <Column width={80}>
          <HeaderCell>보관창고명</HeaderCell>
          <Cell dataKey="l_warehouse" />
        </Column>
  
        <Column width={100}>
          <HeaderCell>보관렉 번호</HeaderCell>
          <Cell dataKey="l_lack" />
        </Column>

  
        <Column width={100}>
          <HeaderCell>상세번호 </HeaderCell>
          <Cell dataKey="l_floor" />
        </Column>
  
        <Column width={150} fixed="right">
          <HeaderCell>품목 상세보기</HeaderCell>
  
          <Cell  style={{ padding: '6px' }}>
            {warehouseList => 
              <Link key={warehouseList.l_code} to={'/detail/' + warehouseList.l_code} className="btn btn-primary area_fit wide_fit">아이템 상세</Link>
            }
          </Cell>
        </Column>
      </Table>
      </div>
    )
}

export default WarehouseList;