import React from 'react';
import { Pagination } from 'rsuite';

const PageMM = () => {
  const [activePage, setActivePage] = React.useState(5);

  // 스타일 객체
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '5vh',
    backgroundColor: 'white',
  };

  return (
    <div style={containerStyle}>
        <Pagination
          prev
          last
          next
          first
          size="sm"
          total={100}
          limit={10}
          activePage={activePage}
          onChangePage={setActivePage}
        />
    </div>
  );

};

export default PageMM;