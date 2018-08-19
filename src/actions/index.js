import StoriesAPI from '../apis/stories_api';
import * as types from '../constants/action_types';

const receiveStories = stories => ({
    type: types.RECEIVE_STORIES,
    stories
});

export const getAllStories = () => dispatch => {
    StoriesAPI.getStroies(stories => {
        dispatch(receiveStories(stories))
    })
}

const receiveHabits = habits => ({
    type: types.RECEIVE_HABITS,
    habits
});

export const getAllHabits = () => dispatch => {
    StoriesAPI.getStroies(stories => {
        dispatch(receiveHabits(stories.map(story => story.habits)))
    })
}