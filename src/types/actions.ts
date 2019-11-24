import { MyData } from "./MyData";

export const ADD_DATA = "ADD_DATA";
export const EDIT_DATA = "EDIT_DATA";
export const REMOVE_DATA = "REMOVE_DATA";
export const SET_DATA = "SET_DATA";

export interface SetDataAction {
  type: typeof SET_DATA;
  myDatas: MyData[];
}

export interface RemoveDataAction {
  type: typeof REMOVE_DATA;
  id: string;
}

export interface EditDataAction {
  type: typeof EDIT_DATA;
  myData: MyData;
}

export interface AddDataAction {
  type: typeof ADD_DATA;
  myData: MyData;
}

export type MyDataActionTypes = 
  SetDataAction | 
  RemoveDataAction | 
  EditDataAction | 
  AddDataAction;

export type AppActions = MyDataActionTypes;