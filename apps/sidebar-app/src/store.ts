import {createStore, Reducer} from "redux";

export interface GlobalState {
  jsSdk: any;
}

// 初始全局状态
const initState: GlobalState = {
  jsSdk: null,
}

// 全局状态的 reducer
const reducer: Reducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_JSSDK':
      return {...state, jsSdk: action.payload}
    default:
      return state;
  }
}

// 创建 redux 的 store
const store = createStore(reducer, initState);

export default store;
