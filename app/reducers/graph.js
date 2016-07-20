import { LOADING, LOADED } from '../actions/graph';

export default function counter(state = [], action) {
  switch (action.type) {
    case LOADING:
      return 'Loading';
    case LOADED:
      return [].concat(action.data);
    default:
      return state;
  }
}
