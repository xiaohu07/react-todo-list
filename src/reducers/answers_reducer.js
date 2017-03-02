/**
 * Created by mhu on 3/1/2017.
 */

import { SET_ITEM, SET_TITLE } from '../constants/index';

const INITIAL_STATE = {};
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_ITEM: {
      return {
        ...state,
        [action.payload.tempListId]: {
          listId: action.payload.tempListId,
        }
      };
    }
    default:
      return state;
  }
}
