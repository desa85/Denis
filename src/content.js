import React from 'react';
var fun;
class Content extends React.Component{
	constructor(props){
		super()
		
	}
	
	azz = (e) => {
		var touchobj = e.changedTouches[0];
		var start = parseInt(touchobj.clientX);
		document.getElementById("content").addEventListener("touchmove", function (e){
			var touchobj = e.changedTouches[0];
			var dist = parseInt(touchobj.clientX);
			if ((dist - start) >= 1) {
				fun();
				document.getElementById("content").removeEventListener
			}

		})
		
		
	}
	render(){

	//тут содержится контент
		return (
			<div id = "content" onTouchStart = {this.azz} onLoad = {fun = this.props.visible}>
				<input className = "contentHead" type = "text" value = {this.props.data.data.head} onChange = {this.props.changeHead} />
				<textarea className = "contentText"  value = {this.props.data.data.text} onChange = {this.props.changeText} />
			</div>
		)
}
}
export default Content