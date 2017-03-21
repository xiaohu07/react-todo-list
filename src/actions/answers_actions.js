/**
 * Created by mhu on 3/1/2017.
 */
import { SET_ITEM, SET_TITLE } from '../constants/index';

export function setItem(listId, content) {
  return {
    type: SET_ITEM,
    payload: { listId, content }
  };
}

export function setTitle(listId, title) {
  return {
    type: SET_TITLE,
    payload: { listId, title }
  };
}
