/**
 * Created by mhu on 3/1/2017.
 */

import { SET_ITEM } from '../constants/index';

const INITIAL_STATE = {
  lists: [
    {
      listId: 0,
      title: null,
      items: [
        {
          itemId: 0,
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
            listId: 0,
            title: null,
            items: [
              {
                itemId: action.payload.itemId,
                value: action.payload.value
              }
            ]
          }
        ]
      });
    }
    default:
      return state;
  }
}
