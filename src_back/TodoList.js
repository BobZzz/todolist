import React, { Component } from 'react'
import store from './store'
import {getInitList,getInptuChangeAction,getAddItemAction,getDeleteItemAction} from './store/actionCreators'
import TodoListUI from './TodoListUI'

// const data = [
//   'Racing car sprays burning fuel into crowd.',
//   'Japanese princess to wed commoner.',
//   'Australian walks 100km after outback crash.',
//   'Man charged over missing wedding girl.',
//   'Los Angeles battles huge wildfires.',
// ];

export default class TodoList extends Component {
  constructor(props){
    super(props)
    this.state = store.getState()
    console.log(this.state);
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleAddItem = this.handleAddItem.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
    store.subscribe(this.handleStoreChange)
  }
  componentDidMount(){
    const action = getInitList()
    store.dispatch(action)

    // axios.get('http://rap2.taobao.org:38080/app/mock/235813/listApi').then(res=>{
    //   const data = res.data.data
    //   const action = initListAction(data)
    //   store.dispatch(action)
      // console.log(action);
    // })
  }
  handleInputChange(e){
    const action = getInptuChangeAction(e.target.value)
    store.dispatch(action)
  }
  handleStoreChange(){
    this.setState(store.getState())
  }
  handleAddItem(){
    const action = getAddItemAction()
    store.dispatch(action)
  }
  handleItemDelete(index){
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }
  render() {
    return <TodoListUI 
              inputValue = {this.state.inputValue}
              handleInputChange = {this.handleInputChange}
              handleAddItem = {this.handleAddItem}
              list = {this.state.list}
              handleItemDelete = {this.handleItemDelete}
              />
  }
}
