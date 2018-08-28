import * as types from '../constants/action_types';
import {storiesRef} from '../config/firebase';
import _ from 'lodash';

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
    storiesRef.on("value", snapshot => {
        dispatch(receiveHabits(_.map(snapshot.val(), story => story.habits)));
    })
}