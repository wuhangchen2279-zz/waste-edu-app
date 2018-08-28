import { RECEIVE_STORIES } from '../constants/action_types';

const byId = (state = {}, action) => {
    switch(action.type) {
        case RECEIVE_STORIES:
            return {...state, ...action.stories};
        default:
            return state;
    }
}

export default byId;