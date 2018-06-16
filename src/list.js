import React from 'react';
import Search from './search.js';
import Addnote from './addnote.js';
import Notes from './notes.js';
var fun;
class List extends React.Component{
	constructor(props){
		super(props)
		
	}
	azz = (e) => {
		var touchobj = e.changedTouches[0];
		var start = parseInt(touchobj.clientX);
		document.getElementById("list-visible").addEventListener("touchmove", function (e){
			var touchobj = e.changedTouches[0];
			var dist = parseInt(touchobj.clientX);
			if ((dist - start) >= -1) {
				fun();
			}

		})
		
		
	}

	/*changeData = (key, data) => {
		this.setState({
			notelist: this.state.notelist.splice(key, 1, data)
		})
	}
	changeData(this.props.data.key, this.props.data)*/
	
	render(){

		return (
			<div id = {this.props.visible ? "list-visible" : "list"} onTouchStart = {this.azz} onLoad = {fun = this.props.fun}> 
				<Search />
				<Addnote  fun = {this.props.addnote} />
				<Notes data = {this.props.notelist} changeinfo = {this.props.changeinfo} />
			</div>
		)
	}
}
export default List