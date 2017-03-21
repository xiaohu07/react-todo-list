/**
 * Created by mhu on 3/1/2017.
 */

import { SET_ITEM } from '../constants/index';

const INITIAL_STATE = {};
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_ITEM: {
      return {
        [action.payload.listId]: {
          listId: action.payload.listId,
          value: action.payload.content
        }
      };
    }
    default:
      return state;
  }
}
