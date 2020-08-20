import { createStore, combineReducers } from "redux";
import { createAction, handleActions } from "redux-actions";

// Action
export const commonType = {
  PRE_ROTER: "PRE_ROTER",
  BLOG_GROUPBY: "BLOG_GROUPBY"
};
//action type
export const setPreRoter = createAction(commonType.PRE_ROTER); //action creator
export const setBlogGroupBy = createAction(commonType.BLOG_GROUPBY);

// reducer
const initialState = {
  preRoter: "",
  blogGroupBy: []
};
//初始化state
let reducers = {
  [commonType.PRE_ROTER](state: any, action: any) {
    const { payload } = action;
    return { ...state, ...payload };
  },
  [commonType.BLOG_GROUPBY](state: any, action: any) {
    const { payload } = action;
    return { ...state, ...payload };
  }
};
const commonReducer = handleActions<any>(reducers, initialState);
const allReducer = combineReducers({
  common: commonReducer
});

// store
const store = createStore(allReducer);
export default store;
