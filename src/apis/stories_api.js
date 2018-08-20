import _stories from './stories.json';
import _ from 'lodash';

const TIMEOUT = 100;

export default {
    getStroies: (cb, timeout) => setTimeout(() => cb(_stories), timeout || TIMEOUT),
    getStory: (id, cb, timeout) => {
        const story = _.find(_stories, story => story.id === id);
        setTimeout(() => cb(story), timeout || TIMEOUT)
    }
}