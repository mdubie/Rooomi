import React from 'react';

export const NewTaskEntry = (props) => {
  let inputStyle= {
  	width: '100%',
  	height: '50px',
  	textAlign: 'center',
  	border: '1px solid black',
  };
	return (
		<form>
		  <input style={inputStyle} placeholder="Enter New Text"/>
		</form>
	)
}