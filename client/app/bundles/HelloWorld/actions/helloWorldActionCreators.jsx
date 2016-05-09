import actionTypes from '../constants/helloWorldConstants';

export function updateName(name) {
  return {
    type: actionTypes.HELLO_WORLD_NAME_UPDATE,
    name
  };
}

export function updateMessage(message) {
  return {
    type: actionTypes.HELLO_WORLD_MESSAGE_UPDATE,
    message
  };
}
