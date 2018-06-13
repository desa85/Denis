import React from 'react';
class Note extends React.Component{
	render(){
		return(
				<div className = "note" onClick = {this.props.changeinfo} >
					<div className = "head"> {this.props.head} </div>
					<div> {this.props.text} </div>
				</div>
			)
	}

}
export default Note