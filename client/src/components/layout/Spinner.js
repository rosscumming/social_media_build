import React from 'react';

const Spinner = () => {
  return (
    <>
      <i
        className='fa fa-spinner fa-spin fa-6x'
        style={{
          margin: 'auto',
          display: 'block',
          textAlign: 'center',
          fontSize: '30px',
        }}
      ></i>{' '}
    </>
  );
};

export default Spinner;
