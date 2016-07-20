import { CLOSE_MODAL, OPEN_MODAL } from '../actions/modal';
export default function counter(state = false, action) {
  switch (action.type) {
    case CLOSE_MODAL:
      return false;
    case OPEN_MODAL:
      return true;
    default:
      return state;
  }
}
