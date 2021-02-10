import {CHANGE_INPUT_VALUE,ADD_LIST_ITEM,DELETE_TODO_ITEM,INIT_LIST_ACTION,GET_INIT_LIST} from './actionType'

export const getInptuChangeAction = value=>({
  type:CHANGE_INPUT_VALUE,
  value
})

export const getAddItemAction = ()=>({
  type:ADD_LIST_ITEM
})

export const getDeleteItemAction = index=>({
  type:DELETE_TODO_ITEM,
  index
})

export const initListAction = data=>({
  type:INIT_LIST_ACTION,
  data
})

export const getInitList = ()=>({
  type:GET_INIT_LIST
})

// export const getTodoList = () => {
//   return (dispatch)=>{
//     axios.get('http://rap2.taobao.org:38080/app/mock/235813/listApi').then(res=>{
//       const data = res.data.data
//       console.log(data);
//       const action = initListAction(data)
//       dispatch(action)
//     })
//   }
// }