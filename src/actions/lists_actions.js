/**
 * Created by mhu on 3/1/2017.
 */
import { SET_ITEM, SET_TITLE, SET_NEW_ITEM } from '../constants/index';

export function setItem(itemId, listId, value) {
  return {
    type: SET_ITEM,
    payload: { itemId, listId, value }
  };
}

export function setNewItem(itemId, listId, value) {
  return {
    type: SET_NEW_ITEM,
    payload: { itemId, listId, value }
  };
}

export function setTitle(listId, title) {
  return {
    type: SET_TITLE,
    payload: { listId, title }
  };
}
