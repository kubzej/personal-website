import React from 'react';
import './SubTitle.css';

const SubTitle = (props) => {
  return (
    <div className='sub-title'>
      <p>{props.text}</p>
    </div>
  );
};

export default SubTitle;
