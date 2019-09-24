import { Action } from '@ngrx/store';

export const INCREMENT = '[page1]INCREMENTPAGE1';
export const DECREMENT = '[page1]DECREMENT';
export const RESET = '[page1]RESET';

export function counterReducer(state: number = 0, action: Action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;

    case DECREMENT:
      return state - 1;

    case RESET:
      return 0;

    default:
      return state;
  }
}
