import { Table, Button, IconButton, Input, DatePicker, InputNumber } from 'rsuite';
import { VscEdit, VscSave, VscRemove } from 'react-icons/vsc';
//import { mockUsers } from './mock';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const { Column, HeaderCell, Cell } = Table;
//const defaultData = mockUsers(8); // 기본 데이터 생성

// 스타일 설정 .table-cell-editing 입력 필드가 테이블 셀안에 꽉차도록 스타일 설정
const styles = `
.table-cell-editing .rs-table-cell-content {
  padding: 4px;
}
.table-cell-editing .rs-input {
  width: 100%;
}
`;

const column = {
  backgroundColor: '#f8f9fa',
};

const BuyInsertTbl = (props) => {

  const navigate = useNavigate();    // 2

  // 입력한 값들을 submit하려면 값을 상태로 보관해야한다.
  // 입력한 값들을 set해서 board 변수(=boardDTO) 대입한 후 , submit할 때 board값을 한꺼번에 전송한다.
  const [item, setItem] = useState({
    item_code: '',
    item_name: '',
    item_standard: '',
    quantity: '',
    price: '',
    supply: '',
    vat: '',
    total: '',
  });

  // // 입력값 변경 핸들러
  // // form에 onChange={} 추가, 값이 change될 때 마다 changeValue의 (e)에 이벤트 컨텍스트가 넘어간다.
  // const changeValue = (e) => {
  //   setItem({
  //     ...item,
  //     [e.target.name]: e.target.value, // name 속성으로 key-value 매칭
  //   });
  // };

  // 1. 아래 url로 요청시 서버쪽에서 받아주는지 확인
  // 2. 실제로 받았다면 save가 제대로 되었는지 확인
  const submitItem = (e) => {
    e.preventDefault();     // submit이 action을 안타고 자기 할일을 그만한다.
    fetch("http://localhost:8081/api/insertItem", {  // 스프링부트
      method: "POST",
      headers: {
        "content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify(item) //javascript 오브젝트를 json으로 변경해서 넘긴다. 저장한 데이터를 스프링부트에서 insert하고 201을 리턴
    })
      .then((res) => {
        console.log(1, res);
        if (res.status === 201) {
          return res.json();
        } else {
          return null;
        }
      })
      .then((res) => {    // catch는 여기서 오류가 발생해야 실행됨
        console.log("등록 성공", res);
        if (res !== null) {
          navigate('/itemOrderList')  // old버전 : props.history.push('/boardList');
        } else {
          alert("주문 작성에 실패하였습니다.");

        }
      })
      .catch((error) => {
        console.log('실패', error);
      });
    };

    // 데이터 변경
    const handleChange = (id, key, value) => { // 특정행 id의 특정 key값을 변경할 때 사용
      const nextData = [...data];  // bject.assign([], data) 새로운 배열을 생성
      const item = nextData.find(item => item.id === id);
      if (item) item[key] = value;
      setItem(nextData);
    };
    // 편집 상태 전환
    const handleEdit = id => {
      const nextData = [...item];
      const activeItem = nextData.find(item => item.id === id);
      if (activeItem) {
        activeItem.status = activeItem.status ? null : 'EDIT';
        setItem(nextData);
      }
    };

    // 행 삭제
    const handleRemove = id => {
      setItem(item.filter(item => item.id !== id));
    };

    return (
      <>
        <style>{styles}</style>

        {/* 행 추가 버튼 */}
        <Button
          onClick={() => {
            setItem([
              { id: item.length + 1, item_code: null, item_name: null, item_standard: null, quantity: null, price: null, supply: null, vat: null, status: 'EDIT' },
              ...item
            ]);
          }}
        >
          상세정보 입력
        </Button>
        <hr />

        <Table height={420} data={item} style={{ width: 960 }}>
          <Column width={130}>
            <HeaderCell style={column}>품명코드</HeaderCell>
            <EditableCell
              dataKey="item_code"
              dataType="number"
              onChange={handleChange}
              onEdit={handleEdit}
            />
          </Column>

          <Column width={130}>
            <HeaderCell style={column}>품목명</HeaderCell>
            <EditableCell
              dataKey="item_name"
              dataType="string"
              onChange={handleChange}
              onEdit={handleEdit}
            />
          </Column>

          <Column width={110}>
            <HeaderCell style={column}>규격</HeaderCell>
            <EditableCell
              dataKey="item_standard"
              dataType="number"
              onChange={handleChange}
              onEdit={handleEdit}
            />
          </Column>

          <Column width={110}>
            <HeaderCell style={column}>수량</HeaderCell>
            <EditableCell
              dataKey="quantity"
              dataType="number"
              onChange={handleChange}
              onEdit={handleEdit}
            />
          </Column>

          <Column width={130}>
            <HeaderCell style={column}>단가</HeaderCell>
            <EditableCell
              dataKey="price"
              dataType="number"
              onChange={handleChange}
              onEdit={handleEdit}
            />
          </Column>

          <Column width={140}>
            <HeaderCell style={column}>공급가액</HeaderCell>
            <EditableCell
              dataKey="supply"
              dataType="number"
              onChange={handleChange}
              onEdit={handleEdit}
            />
          </Column>

          <Column width={130}>
            <HeaderCell style={column}>부가세</HeaderCell>
            <EditableCell
              dataKey="vat"
              dataType="number"
              onChange={handleChange}
              onEdit={handleEdit}
            />
          </Column>

          <Column width={130}>
            <HeaderCell style={column}>저장 / 삭제</HeaderCell>
            <ActionCell dataKey="id" onEdit={handleEdit} onRemove={handleRemove} onClick={submitItem}/>
          </Column>
        </Table>
        
      </>
    );
  };

  function toValueString(value, dataType) {
    return dataType === 'date' ? value?.toLocaleDateString() : value;
  }

  const fieldMap = {
    string: Input,
    number: InputNumber,
    date: DatePicker
  };

  // 편집 가능한 셀
  const EditableCell = ({ rowData, dataType, dataKey, onChange, onEdit, ...props }) => {
    const editing = rowData.status === 'EDIT';

    const Field = fieldMap[dataType];
    const value = rowData[dataKey];
    const text = toValueString(value, dataType);

    return (
      <Cell
        {...props}
        className={editing ? 'table-cell-editing' : ''}
        onDoubleClick={() => {
          onEdit?.(rowData.id);
        }}
      >
        {editing ? (
          <Field
            defaultValue={value}
            onChange={value => {
              onChange?.(rowData.id, dataKey, value);
            }}
          />
        ) : (
          text
        )}
      </Cell>
    );
  };

  // 액션 버튼 수정 & 삭제
  const ActionCell = ({ rowData, dataKey, onEdit, onRemove, ...props }) => {
    return (
      <Cell {...props} style={{ padding: '6px', display: 'flex', gap: '4px' }} >
        <IconButton
          appearance="subtle"
          icon={rowData.status === 'EDIT' ? <VscSave /> : <VscEdit />}
          onClick={() => {
            onEdit(rowData.id);
          }}
        />
        <IconButton
          appearance="subtle"
          icon={<VscRemove />}
          onClick={() => {
            onRemove(rowData.id);
          }}
        />
      </Cell>
    );
  };

export default BuyInsertTbl;