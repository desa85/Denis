import React from 'react';
class Content extends React.Component{
	constructor(props){
		super()
	}
	render(){

	
		return (
			<div id = "content">
				<input className = "contentHead" type = "text" value = {this.props.data.data.head} onChange = {this.props.changeHead} />
				<textarea className = "contentText"  value = {this.props.data.data.text} onChange = {this.props.changeText} />
			</div>
		)
}
}
export default Content