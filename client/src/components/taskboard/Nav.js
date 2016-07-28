import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

export const Nav = () => {
	let AppBarStyle = {
		background: 'linear-gradient(to bottom right, maroon, rgba(0,0,0,0))',
	}
	return (<AppBar
	    style={AppBarStyle}
	    showMenuIconButton={false}
	    title="Rumi"
	    iconElementRight={
	      <IconMenu iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}>
	        <a href="/logout"><MenuItem primaryText="Sign out" /></a>
	      </IconMenu>
	    }
	  />);
};
