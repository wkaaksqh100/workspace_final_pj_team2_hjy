import { Table, Button, IconButton, Input, DatePicker, InputNumber } from 'rsuite';
import { VscEdit, VscSave, VscRemove } from 'react-icons/vsc';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const { Column, HeaderCell, Cell } = Table;
const styles = `
.table-cell-editing .rs-table-cell-content {
  padding: 4px;
}
.table-cell-editing .rs-input {
  width: 100%;
}`;

const BuyInsertTbl = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);  // 데이터를 배열로 변경

  const submitItem = (e) => {
    e.preventDefault();
    fetch("http://localhost:8081/main/insertItem", {
      method: "POST",
      headers: { "content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify(data)
    })
      .then((res) => res.status === 201 ? res.json() : null)
      .then((res) => {
        if (res) navigate('/buyList');
        else alert("주문 작성에 실패하였습니다.");
      })
      .catch((error) => console.log('실패', error));
  };

  const handleChange = (id, key, value) => {
    setData(prevData =>
      prevData.map(item =>
        item.id === id ? { ...item, [key]: value } : item
      )
    );
  };

  const handleEdit = id => {
    setData(prevData =>
      prevData.map(item =>
        item.id === id ? { ...item, status: item.status ? null : 'EDIT' } : item
      )
    );
  };

  const handleRemove = id => {
    setData(prevData => prevData.filter(item => item.id !== id));
  };

  return (
    <>
      <style>{styles}</style>

      <Button onClick={() => {
        setData(prevData => [
          { id: prevData.length + 1, item_code: '', item_name: '', item_standard: '', quantity: 0, price: 0, supply: 0, vat: 0, status: 'EDIT' },
          ...prevData
        ]);
      }}>
        상세정보 입력
      </Button>
      <hr />

      <Table height={420} data={data} style={{ maxWidth: 1500 }}>
        {['item_code', 'item_name', 'item_standard', 'quantity', 'price', 'supply', 'vat'].map(key => (
          <Column key={key} width={130}>
            <HeaderCell>{key}</HeaderCell>
            <EditableCell dataKey={key} dataType="string" onChange={handleChange} onEdit={handleEdit} />
          </Column>
        ))}
        <Column width={130}>
          <HeaderCell>저장 / 삭제</HeaderCell>
          <ActionCell onEdit={handleEdit} onRemove={handleRemove} onClick={submitItem} />
        </Column>
      </Table>
    </>
  );
};

const fieldMap = { string: Input, number: InputNumber, date: DatePicker };
const EditableCell = ({ rowData, dataType, dataKey, onChange, onEdit, ...props }) => {
  const editing = rowData.status === 'EDIT';
  const Field = fieldMap[dataType] || Input;
  return (
    <Cell {...props} className={editing ? 'table-cell-editing' : ''} onDoubleClick={() => onEdit?.(rowData.id)}>
      {editing ? <Field defaultValue={rowData[dataKey]} onChange={value => onChange?.(rowData.id, dataKey, value)} /> : rowData[dataKey]}
    </Cell>
  );
};

const ActionCell = ({ rowData, onEdit, onRemove, ...props }) => (
  <Cell {...props} style={{ padding: '6px', display: 'flex', gap: '4px' }}>
    <IconButton appearance="subtle" icon={rowData.status === 'EDIT' ? <VscSave /> : <VscEdit />} onClick={() => onEdit(rowData.id)} />
    <IconButton appearance="subtle" icon={<VscRemove />} onClick={() => onRemove(rowData.id)} />
  </Cell>
);

export default BuyInsertTbl;