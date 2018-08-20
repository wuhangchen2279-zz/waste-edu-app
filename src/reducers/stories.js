import { RECEIVE_STORIES, RECEIVE_STORY } from '../constants/action_types';

const byId = (state = {}, action) => {
    switch(action.type) {
        case RECEIVE_STORIES:
            return {
                ...state, 
                ...action.stories.reduce((obj, story) => {
                    obj[story.id] = story;
                    return obj;
                }, {})
            };
        case RECEIVE_STORY:
            return {
                ...state,
                [action.story.id]: action.story
            }
        default:
            return state;
    }
}

export default byId;