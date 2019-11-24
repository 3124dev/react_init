import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { AppActions } from "../types/actions";
import { myDataReducer } from "../reducers/myDatas";

export const rootReducer = combineReducers({
  myDatas: myDataReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>)
);