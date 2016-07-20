import { SAVED_FILES } from '../actions/dropbox';

export default function dropbox(state = 0, action) {
  switch (action.type) {
    case SAVED_FILES:
      return action.files.concat([]);
    default:
      return state;
  }
}
