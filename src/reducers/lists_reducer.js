/**
 * Created by mhu on 3/1/2017.
 */

import { SET_ITEM, SET_TITLE, SET_NEW_ITEM, INITIAL_STATE, REMOVE_ITEM, COMPLETE_ITEM, RECOVER_ITEM } from '../constants/index';


export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_ITEM: {
      const item = {
        itemId: action.payload.itemId,
        listId: action.payload.listId,
        value: action.payload.value,
        completed: false
      };
      const tempState = state;
      tempState.lists[action.payload.listId].items[action.payload.itemId] = item;
      return Object.assign({}, state, tempState);
    }
    case SET_NEW_ITEM: {
      const newItem = {
        itemId: action.payload.itemId,
        listId: action.payload.listId,
        value: action.payload.value,
        completed: false
      };
      const tempState = state;
      tempState.lists[action.payload.listId].items[action.payload.itemId] = newItem;
      return Object.assign({}, state, tempState);
    }
    case SET_TITLE: {
      const tempState = state;
      tempState.lists[action.payload.listId].title = action.payload.title;
      return Object.assign({}, state, tempState);
    }
    case REMOVE_ITEM: {
      const tempState = state;
      delete tempState.lists[action.payload.listId].items[action.payload.itemId];
      return Object.assign({}, state, tempState);
    }
    case COMPLETE_ITEM: {
      const tempState = state;
      tempState.lists[action.payload.listId].items[action.payload.itemId].completed = true;
      return Object.assign({}, state, tempState);
    }
    case RECOVER_ITEM: {
      const tempState = state;
      tempState.lists[action.payload.listId].items[action.payload.itemId].completed = false;
      console.log('test');
      console.log(tempState.lists[action.payload.listId].items[action.payload.itemId], 'reducer')
      return Object.assign({}, state, tempState);
    }
    default: {
      return state;
    }
  }
}
