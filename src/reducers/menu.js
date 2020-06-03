import {
  TOGGLE_MENU,
} from 'actions/menu';

const initialState = {
  menuIsOpen: false,
};

export default function menuReducer(state = initialState, action) {
  const { type, ...actions } = action;
  switch (type) {
    case TOGGLE_MENU:
      return {
        ...state,
        menuIsOpen: !state.menuIsOpen,
      };
    default:
      return state;
  }
}
