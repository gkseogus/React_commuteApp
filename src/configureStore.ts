import { Store, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; 
import { routerMiddleware } from 'connected-react-router';
import { History } from 'history';
import { ApplicationState, createRootReducer } from './store';
import { composeWithDevTools } from 'redux-devtools-extension'; 

// 여기서 configureStore는 단지 함수명이다. (모듈로 불러오지 않음)
export default function configureStore(
  // History를 store에 저장하기 위한 변수
  history: History,
  // 컴포넌트들의 각 초기상태를 store에 저장
  initialState: ApplicationState 
): Store<ApplicationState> {
  const store = createStore(
    createRootReducer(history),
    initialState,
    composeWithDevTools(
      applyMiddleware(
        routerMiddleware(history), thunk
      )
    )
  );
  return store;
}
