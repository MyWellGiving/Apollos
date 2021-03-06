import React from 'react';
import { pure, compose } from 'recompose';
import Header from '@modules/Header';
import FeedView from '@primitives/FeedView';
import FlexedView from '@primitives/FlexedView';
import withHomeFeed from '@data/withHomeFeed';

const FeedViewWithHomeFeed = withHomeFeed(FeedView);

const enhance = compose(
  pure,
);

const Feed = enhance(() => (
  <FlexedView>
    <Header titleText="NewSpring Church" />
    <FeedViewWithHomeFeed />
  </FlexedView>
));

export default Feed;
