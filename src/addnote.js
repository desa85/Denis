import React from 'react';

class Addnote extends React.Component{
	
  	
	render(){
		
		return(
			<div id = "addnote">
				<button onClick = {this.props.fun}>+</button>
			</div>
		)
	}

}
export default Addnote