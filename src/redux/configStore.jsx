import { createStore, combineReducers } from "redux";
import burgerReducer from "./reducers/burgerReducer";
import { commentReducer } from "./reducers/commentReducer";
import { imgCarReducer } from "./reducers/imgCarReducer";
import { numberReducer } from "./reducers/numberReducer";

const rootReducer = combineReducers({
  //Nơi chứa các state của ứng dụng
  number:numberReducer,
  imgCar:imgCarReducer,
  commentReducer:commentReducer,
  burgerReducer:burgerReducer
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// this.state = {
//     number: 1
// }
