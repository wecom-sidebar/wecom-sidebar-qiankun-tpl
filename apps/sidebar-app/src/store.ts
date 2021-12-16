import {createStore, Reducer} from "redux";

export interface GlobalState {
  entry: string;
}

// 初始全局状态（当独立运行项目时，可以 Mock 此 state）
const initState: GlobalState = {
  entry: '',
}

// 全局状态的 reducer
const reducer: Reducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_ENTRY':
      return {...state, entry: action.payload}
    default:
      return state;
  }
}

// 创建 redux 的 store
const store = createStore(reducer, initState);

export default store;
