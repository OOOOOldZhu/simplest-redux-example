/**
 * Created by z on 2018/7/13.
 */
import { createStore } from 'redux';

// Action
const increaseAction = { type: 'increase' };

let initialState = { count: 0 };

// Reducer
function counter(state = initialState, action) {
    const count = state.count;
    switch (action.type) {
        case 'increase':
            return { count: count + 1 };
        default:
            return state;
    }
}

// Store
const store = createStore(counter);

export default {store,increaseAction};
