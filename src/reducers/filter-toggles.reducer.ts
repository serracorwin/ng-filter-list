import * as _ from 'lodash';

import * as toggleActions from '../actions/filter-toggles.actions';

export type Action = toggleActions.ALL;

export function filterToggles(state: object = {}, action: Action): object {
  const newToggle = {};

  switch (action.type) {
    case toggleActions.ADD:
      newToggle[action.payload] = false;

      return { ...newToggle, ...state };
    case toggleActions.TOGGLE:
      const toggle = !state[action.payload];
      newToggle[action.payload] = toggle;

      return { ...state, ...newToggle };
    case toggleActions.RESET:
      const newState = {};

      _.each(state, (value, key) => {
        newState[key] = false;
      });

      return newState;
    default:
      return state;
  }
}
