import React from 'react';
import Search from './search.js';
import Addnote from './addnote.js';
import Notes from './notes.js';

class List extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			
		}
	}
	/*changeData = (key, data) => {
		this.setState({
			notelist: this.state.notelist.splice(key, 1, data)
		})
	}
	changeData(this.props.data.key, this.props.data)*/
	
	render(){

		return (
			<div id = "list"> 
				<Search />
				<Addnote  fun = {this.props.addnote} />
				<Notes data = {this.props.notelist} changeinfo = {this.props.changeinfo} />
			</div>
		)
	}
}
export default List