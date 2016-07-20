'use strict';

// Actions
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const OPEN_MODAL = 'OPEN_MODAL';


export function close() {
  return {
    type: CLOSE_MODAL
  };
}


export function open() {
  return {
    type: OPEN_MODAL
  };
}
