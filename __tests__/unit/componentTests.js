import React, {useRef} from 'react';
import renderer from 'react-test-renderer';
import {Animated} from 'react-native';
import ServiceConsumerHomeHeader from '../../src/components/headers/ServiceConsumerHomeHeader';

test('Service Consumer Header renders correctly at scroll value 0', () => {
  const tree = renderer
    .create(<ServiceConsumerHomeHeader scrollValue={new Animated.Value(0)} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
