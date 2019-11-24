import { MyData } from "../types/MyData";
import { AppActions, ADD_DATA, REMOVE_DATA, EDIT_DATA, SET_DATA } from "../types/actions";
import { Dispatch } from "redux";
import { AppState } from "../store/configureStore";
import uuid from "uuid";

export const addMyData = (myData: MyData): AppActions => ({
  type: ADD_DATA,
  myData
});

export const removeMyData = (id: string): AppActions => ({
  type: REMOVE_DATA,
  id
});

export const editMyData = (myData: MyData): AppActions => ({
  type: EDIT_DATA,
  myData
});

export const setMyData = (myDatas: MyData[]): AppActions => ({
  type: SET_DATA,
  myDatas
});

export const startAddMyData = (initMyData: {
  description?: string;
  note?: string;
  amount?: number;
  createdAt?: number;
}) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0
    } = initMyData;
    const myData = { description, note, amount, createdAt };

    const id = uuid();

    return dispatch(
      addMyData({
        id,
        ...myData
      })
    )
  }
}

export const startRemoveMyData = (id: string) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    dispatch(removeMyData(id));
  };
};

export const startEditMyData = (myData: MyData) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    dispatch(editMyData(myData));
  }
}

export const startSetMyData = (myDatas: MyData[]) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    dispatch(setMyData(myDatas));
  }
}