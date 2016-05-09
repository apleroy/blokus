import Immutable from 'immutable';

import actionTypes from '../constants/helloWorldConstants';

export const $$initialState = Immutable.fromJS({
  name: '', // this is the default state that would be used if one were not passed into the store
  message: '', // this is the default state that would be used if one were not passed into the store
});

export default function helloWorldReducer($$state = $$initialState, action) {
  const { type, name, message } = action;

  switch (type) {

    case actionTypes.HELLO_WORLD_NAME_UPDATE:
      return $$state.set('name', name);

    case actionTypes.HELLO_WORLD_MESSAGE_UPDATE:
      return $$state.set('message', message);

    default:
      return $$state;
  }
}
