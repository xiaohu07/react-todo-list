/**
 * Created by mhu on 3/1/2017.
 */

export const SET_ITEM = 'SET_ITEM';
export const SET_NEW_ITEM = 'SET_NEW_ITEM';
export const SET_TITLE = 'SET_TITLE';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const COMPLETE_ITEM = 'COMPLETE_ITEM ';
export const RECOVER_ITEM = 'RECOVER_ITEM ';
export const SAVE_NEW_LIST = 'SAVE_NEW_LIST ';

export const COMPLETED_TEXT = {
  textDecoration: 'line-through',
  color: 'rgba(0,0,0,.54)'
};

export const COLORS = {
  white: '#ffffff',
  red: '#ff8a80',
  orange: '#ffd180',
  blue: '#80d8ff',
  green: '#ccff90',
  gray: '#cfd8dc'
};

export const INITIAL_STATE = {
  lists: {
    0: {
      listId: 0,
      title: null,
      items: {
        0: {
          itemId: 0,
          listId: 0,
          value: null,
          completed: false
        }
      }
    }
  }
};
