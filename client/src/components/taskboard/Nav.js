import React from 'react';

export const Nav = ({ username }) => {
  let navStyle = {
    width: '100%',
    height: '10%',
    border: '1px solid #666',
  };

  let headerStyle = {
    display: 'inline',
    float: 'left',
  };

  let linkStyle = {
    display: 'inline',
    float: 'right',
  };

  return (
    <div style={navStyle}>
      <h1 style={headerStyle}>Roomi</h1>
      <a style={linkStyle} href="/logout">logout</a>
    </div>
  );
};
