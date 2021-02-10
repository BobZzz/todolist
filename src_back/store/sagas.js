import { takeEvery,put } from 'redux-saga/effects'
import { GET_INIT_LIST } from "./actionType";
import { initListAction } from "./actionCreators";
import axios from 'axios'

function* getInitList(){
  try {
    const res = yield axios.get('http://rap2.taobao.org:38080/app/mock/235813/listApi')
    const action = initListAction(res.data.data)
    yield put(action)
  } catch (error) {
    console.log(error);
  }
  
  // axios.get('http://rap2.taobao.org:38080/app/mock/235813/listApi').then(res=>{
    //   const data = res.data.data
    //   const action = initListAction(data)
    //   store.dispatch(action)
      // console.log(action);
    // })
}

function* mySaga() {
  yield takeEvery(GET_INIT_LIST,getInitList)
}

export default mySaga;