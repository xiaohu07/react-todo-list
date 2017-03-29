/**
 * Created by mhu on 3/1/2017.
 */

import { SET_ITEM, SET_TITLE, SET_NEW_ITEM, INITIAL_STATE, REMOVE_ITEM } from '../constants/index';


export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_ITEM: {
      const item = {
        itemId: action.payload.itemId,
        listId: action.payload.listId,
        value: action.payload.value
      };
      const tempState = state;
      tempState.lists[action.payload.listId].items[action.payload.itemId] = item;
      return Object.assign({}, state, tempState);
    }
    case SET_NEW_ITEM: {
      const newItem = {
        itemId: action.payload.itemId,
        listId: action.payload.listId,
        value: action.payload.value
      };
      const tempState = state;
      tempState.lists[action.payload.listId].items.push(newItem);
      return Object.assign({}, state, tempState);
    }
    case SET_TITLE: {
      return Object.assign({}, state, {
        lists: [
          {
            listId: action.payload.listId,
            title: action.payload.title,
            items: state.lists[action.payload.listId].items
          }
        ]
      });
    }
    case REMOVE_ITEM: {
      const tempState = state;
      tempState.lists[action.payload.listId].items.splice(action.payload.itemId, 1);
      return Object.assign({}, state, tempState);
    }
    default: {
      return state;
    }
  }
}
