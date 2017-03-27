/**
 * Created by mhu on 3/1/2017.
 */

export const SET_ITEM = 'SET_ITEM';
export const SET_NEW_ITEM = 'SET_NEW_ITEM';
export const SET_TITLE = 'SET_TITLE';

export const INITIAL_STATE = {
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
