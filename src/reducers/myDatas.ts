import { MyData } from "../types/MyData";
import { MyDataActionTypes } from "../types/actions";

const myDatasReducerDefaultState: MyData[] = [];

const myDataReducer = (
  state = myDatasReducerDefaultState,
  action: MyDataActionTypes
): MyData[] => {
  switch (action.type) {
    case "ADD_DATA":
      return [...state, action.myData];
    case "REMOVE_DATA":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_DATA":
      return state.map(data => {
        if(data.id === action.myData.id) {
          return {
            ...data,
            ...action.myData
          };
        } else {
          return data;
        }
      });
    case "SET_DATA":
      return action.myDatas;
    default:
      return state;
  }
};

export { myDataReducer };