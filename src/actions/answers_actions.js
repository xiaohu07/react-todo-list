/**
 * Created by mhu on 3/1/2017.
 */
import { SET_ITEM, SET_TITLE } from '../constants/index';

export function setItem(listId, content, newList) {
  let tempListId = listId;
  if (newList) {
    tempListId = 50;
  }
  return {
    type: SET_ITEM,
    payload: { tempListId, content }
  };
}

export function setTitle(listId, title, newList) {
  let tempListId = listId;
  if (newList) {
    tempListId = 50;
  }
  return {
    type: SET_TITLE,
    payload: { tempListId, title }
  };
}
