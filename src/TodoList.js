import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'
import axios from 'axios'


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
      }))
    }
  }
  handleInputChange(e){
    const value = e.target.value
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
  // componentWillMount(){
  //   console.log('componentWillMount');
  // }
  componentDidMount(){
    // console.log('componentDidMount');
    axios.get('api/todolist').then(()=>{
      // alert('succ')
    }).catch(()=>{
      // alert('err')
    })
  }
  // shouldComponentUpdate(){
  //   console.log('shouldComponentUpdate');
  //   return true
  // }
  // componentWillUpdate(){
  //   console.log('componentWillUpdate');
  // }
  // componentDidUpdate(){
  //   console.log('componentDidUpdate')
  // }
  render() {
    console.log('render')
    return (
      <Fragment>
      <div>
        <label htmlFor="insertArea">请输入</label>
        <input id="insertArea" value={this.state.inputValue} onChange={this.handleInputChange} type="text"/>
        <button className='red-btn' onClick={this.handleBtnClick}>add</button>
      </div>
      <ul>
        {this.getTodoItem()}
      </ul>
      </Fragment>
     
    )
  }
}
