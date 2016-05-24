import { Actions } from '../actions/demoActions';

const initialState = {
  items: []
};

function demoReducer(state = initialState, action) {

  switch (action.type) {

    case Actions.POPULATE_ITEMS: return {
      ...state,
      items: action.items
    };

    default: return state;
  }
}

export default demoReducer;
