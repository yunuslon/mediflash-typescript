import {GlobalState} from '@redux/staterReducer/global';

type actionState = {type: string; value: any};

const initGlobalState: GlobalState = {
  isLoading: false,
};

export const globalReducer = (state = initGlobalState, action: actionState) => {
  if (action.type === 'SET_LOADING') {
    return {
      ...state,
      isLoading: action.value,
    };
  }

  return state;
};
