import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import StoryGridItemComponent from '../components/story_grid_item';

class StoriesGridComponent extends Component {

    renderStoryGridItem() {
        return _.map(this.props.stories, story => {
            return <StoryGridItemComponent key={story.id} story={story} />
        });
    }

    render() {
        return (
            <section className="portfolio">
                <div className="container">
                    <h2 className="text-center text-uppercase text-secondary mb-0">Stories</h2>
                    <hr className="star-dark mb-5">
                    </hr>
                    <div className="row story-row">
                        {this.renderStoryGridItem()}
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return { stories: state.stories }
}

export default connect(
    mapStateToProps, null
)(StoriesGridComponent);
