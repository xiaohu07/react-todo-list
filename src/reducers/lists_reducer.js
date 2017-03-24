/**
 * Created by mhu on 3/1/2017.
 */

import { SET_ITEM, SET_TITLE } from '../constants/index';

const INITIAL_STATE = {
  lists: [
    {
      listId: 0,
      title: null,
      items: [
        {
          itemId: 0,
          listId: 0,
          value: null
        }
      ]
    }
  ]
};
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_ITEM: {
      return Object.assign({}, state, {
        lists: [
          {
            listId: action.payload.listId,
            title: state.lists[action.payload.listId].title,
            items: [
              {
                itemId: action.payload.itemId,
                listId: action.payload.listId,
                value: action.payload.value
              }
            ]
          }
        ]
      });
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
    default:
      return state;
  }
}
