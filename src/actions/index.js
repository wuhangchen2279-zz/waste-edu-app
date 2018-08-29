import * as types from '../constants/action_types';
import {storiesRef} from '../config/firebase';

//receive stories from redux thunk dispatch
const receiveStories = stories => ({
    type: types.RECEIVE_STORIES,
    stories
});

//handle action to fectch all stroies from firebase DB
export const getAllStories = () => dispatch => {
    storiesRef.on("value", snapshot => {
        dispatch(receiveStories(snapshot.val()));
    })
}

//receive habits from redux thunk dispatch
const receiveHabits = habits => ({
    type: types.RECEIVE_HABITS,
    habits
});

//handle action to fetch all habits from firebase DB
export const getAllHabits = () => dispatch => {
    storiesRef.on("value", snapshot => {
        dispatch(receiveHabits(snapshot.val().map(story => story.habits)))
    })
}