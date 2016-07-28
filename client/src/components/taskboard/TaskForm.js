import React from 'react';

export const TaskForm = (props) => {
  let inputStyle= {
  	width: '100%',
  	height: '50px',
  	textAlign: 'center',
  };
	return (
		<form>
		  <input style={inputStyle} placeholder="Enter New Text"/>
		</form>
	)
}