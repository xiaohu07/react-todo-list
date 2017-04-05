/**
 * Created by mhu on 3/1/2017.
 */
import { SET_ITEM, SET_TITLE, SET_NEW_ITEM,
  REMOVE_ITEM, COMPLETE_ITEM, RECOVER_ITEM, SAVE_NEW_LIST } from '../constants/index';

export function setItem(itemId, listId, value, completed) {
  return {
    type: SET_ITEM,
    payload: { itemId, listId, value, completed }
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

export function completeItem(itemId, listId) {
  return {
    type: COMPLETE_ITEM,
    payload: { itemId, listId }
  };
}

export function recoverItem(itemId, listId) {
  return {
    type: RECOVER_ITEM,
    payload: { itemId, listId }
  };
}

export function removeItem(itemId, listId) {
  return {
    type: REMOVE_ITEM,
    payload: { itemId, listId }
  };
}

export function saveNewList(listId) {
  const newListState = stateInitializer(listId);
  return {
    type: SAVE_NEW_LIST,
    payload: newListState
  };
}

function stateInitializer(listId) {
  return (
  {
    listId,
    title: null,
    items: {
      0: {
        itemId: 0,
        listId,
        value: null,
        completed: false
      }
    }
  });
}
