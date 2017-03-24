/**
 * Created by mhu on 3/1/2017.
 */
import { SET_ITEM, SET_TITLE } from '../constants/index';

export function setItem(itemId, value) {
  return {
    type: SET_ITEM,
    payload: { itemId, value }
  };
}

export function setTitle(listId, title) {
  return {
    type: SET_TITLE,
    payload: { listId, title }
  };
}
