import React from 'react';
import List from './list.js';
import Content from './content.js'
class note {
	constructor(head, text, key){
		this.head = head;
		this.text = text;
		this.key = key}
}
class App extends React.Component{
	
	constructor(props){
		super(props)
		this.state = {
			data: {head: "некий заголовок",
				text: "всё остальное",
				key: null},
			notelist: [{
				head: "первый",
				text: "это было весьма странно, но я справился",
				key: 0
			},
			{
				head: "веселый",
				text: "уже не в какие ворота не лезит",
				key: 1
			},
			{
				head: "гафрированный",
				text: "почему здесь стоит железная дорога?",
				key: 2
			}] 
		}
	}
	changeinfo = (head, text, key) => {
		this.setState({
			data:{head: head,
				text: text,
				key: key}
		})
	}
	addnote = () => {
		this.setState({
			notelist: this.state.notelist.concat(new note('Новая заметка','какой то текс', this.state.notelist.length))
		})
	}
	changeHead = (event) => {
		var arr = this.state.notelist;
		var obj = this.state.data;
		obj.head = event.target.value;
		//arr.splice(this.state.data.key, 1, this.state.data);
		console.log(this.state.data);
		arr[this.state.data.key].head = event.target.value;
		this.setState({data: obj, notelist: arr});


	}
	changeText = (event) => {
		var arr = this.state.notelist;
		var obj = this.state.data;
		obj.text = event.target.value;
		arr[this.state.data.key].text = event.target.value;
		this.setState({data: obj, notelist: arr})
	}
	
	render(){

		
		return (

			<div>
				<List data = {this.state.data} changeinfo = {this.changeinfo} notelist = {this.state.notelist} addnote = {this.addnote} />
				<Content data = {this.state} changeHead = {this.changeHead}  changeText = {this.changeText} />
			</div>
		)
	}
}
export default App