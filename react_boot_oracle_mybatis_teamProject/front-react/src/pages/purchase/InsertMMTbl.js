import { Table, Button, IconButton, Input, DatePicker, InputNumber } from 'rsuite';
import { VscEdit, VscSave, VscRemove } from 'react-icons/vsc';
import { mockUsers } from './mock';
import React from 'react';

const { Column, HeaderCell, Cell } = Table;
const defaultData = mockUsers(8);

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

const InsertMMTbl = () => {
  const [data, setData] = React.useState(defaultData);

  const handleChange = (id, key, value) => {
    const nextData = Object.assign([], data);
    nextData.find(item => item.id === id)[key] = value;
    setData(nextData);
  };
  const handleEdit = id => {
    const nextData = Object.assign([], data);
    const activeItem = nextData.find(item => item.id === id);

    activeItem.status = activeItem.status ? null : 'EDIT';

    setData(nextData);
  };

  const handleRemove = id => {
    setData(data.filter(item => item.id !== id));
  };

  return (
    <>
      <style>{styles}</style>

      <Button style={{width: 960}}
        onClick={() => {
          setData([
            { id: data.length + 1, name: '', age: 0, birthdate: null, status: 'EDIT' },
            ...data
          ]);
        }}
      >
        상세정보 입력
      </Button>
      <hr />
      
      <Table height={420} data={data} style={{width: 960}}>
        <Column width={120}>
          <HeaderCell style={column}>품명코드</HeaderCell>
          <EditableCell
            dataKey="id"
            dataType="number"
            onChange={handleChange}
            onEdit={handleEdit}
          />
        </Column>

        <Column width={150}>
          <HeaderCell style={column}>품목명</HeaderCell>
          <EditableCell
            dataKey="name"
            dataType="string"
            onChange={handleChange}
            onEdit={handleEdit}
          />
        </Column>

        <Column width={100}>
          <HeaderCell style={column}>규격</HeaderCell>
          <EditableCell
            dataKey="age"
            dataType="number"
            onChange={handleChange}
            onEdit={handleEdit}
          />
        </Column>

        <Column width={100}>
          <HeaderCell style={column}>수량</HeaderCell>
          <EditableCell
            dataKey="age"
            dataType="number"
            onChange={handleChange}
            onEdit={handleEdit}
          />
        </Column>

        <Column width={120}>
          <HeaderCell style={column}>단가</HeaderCell>
          <EditableCell
            dataKey="age"
            dataType="number"
            onChange={handleChange}
            onEdit={handleEdit}
          />
        </Column>

        <Column width={120}>
          <HeaderCell style={column}>공급가액</HeaderCell>
          <EditableCell
            dataKey="age"
            dataType="number"
            onChange={handleChange}
            onEdit={handleEdit}
          />
        </Column>

        <Column width={120}>
          <HeaderCell style={column}>부가세</HeaderCell>
          <EditableCell
            dataKey="age"
            dataType="number"
            onChange={handleChange}
            onEdit={handleEdit}
          />
        </Column>

        <Column width={130}>
          <HeaderCell style={column}>저장 / 삭제</HeaderCell>
          <ActionCell dataKey="id" onEdit={handleEdit} onRemove={handleRemove} />
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

export default InsertMMTbl;