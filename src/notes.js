import React from 'react';
import Note from './note.js'
class Notes extends React.Component{
	constructor(props) {
		super(props);
		this.listmy = [];
		
  		}
	render(){

		//console.log(this.state.vov);

		
		if(this.props.data == 0){
			return (<p>Кажется ничего нет {this.state.vov}</p>)
		}
		else{
			this.listmy = this.props.data.map((item) => {
				return(<Note head = {item.head} text = {item.text} key = {item.key} changeinfo = {() => {this.props.changeinfo(item.head, item.text, item.key)}} />)
			})
			return (this.listmy)
		}
	}

}

export default Notes