import React from 'react';

const Logo = (props) => {
  return (
    <div className="logo-container">
      <img src={props.source} alt={props.alter} className="logo-container__img" />
    </div>
  )
};

export default Logo;
