import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'


export default class TodoList extends Component {
  constructor(props){
    super(props);
    this.state={
      list:[],
      inputValue:''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }
  handleBtnClick(){
    if(this.state.inputValue){
      this.setState((prevState)=>({
        list:[...prevState.list,prevState.inputValue],
        inputValue:''
      }),()=>{
        console.log(this.ul.querySelectorAll('li').length);
      })
    }
  }
  handleInputChange(e){
    const value = this.input.value
    this.setState(()=>({
      inputValue:value
    }))
  }
  // handleItemClick(index){
  //   const list = [...this.state.list]
  //   list.splice(index,1)
  //   this.setState({list})
  // }
  handleDelete(index){
    const list = [...this.state.list]
    list.splice(index,1)
    this.setState((prevState)=>{
      const list = [...prevState.list]
      list.splice(index,1)
      return {list}
    })
  }
  getTodoItem(){
    return (
      this.state.list.map((item,index)=>{
        // return <li key={index} onClick={this.handleItemClick.bind(this,index)}>{item}</li>
        return (
            <TodoItem deleteFn={this.handleDelete} key={index} content={item} index={index}/>
        );
        })
    )
  }
  render() {
    return (
      <Fragment>
      <div>
        <label htmlFor="insertArea">请输入</label>
        <input 
          id="insertArea" 
          value={this.state.inputValue} 
          onChange={this.handleInputChange} 
          type="text"
          ref={(input)=>{this.input=input}}
        />
        <button className='red-btn' onClick={this.handleBtnClick}>add</button>
      </div>
      <ul ref={(ul)=>{this.ul=ul}}>
        {this.getTodoItem()}
      </ul>
      </Fragment>
    )
  }
}
