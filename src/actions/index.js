import StoriesAPI from '../apis/stories_api';
import * as types from '../constants/action_types';
import {storiesRef} from '../config/firebase';

const receiveStories = stories => ({
    type: types.RECEIVE_STORIES,
    stories
});

export const getAllStories = () => dispatch => {
    storiesRef.on("value", snapshot => {
        dispatch(receiveStories(snapshot.val()));
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