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

const receiveStory = story => ({
    type: types.RECEIVE_STORY,
    story
});

export const getStory = () => dispatch => {
    StoriesAPI.getStory(1, story => {
        dispatch(receiveStory(story))
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