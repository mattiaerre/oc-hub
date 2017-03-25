import React from 'react';
import { create } from 'react-test-renderer';
import App from './App';

test('App to match snapshot', () => {
  const props = {
    model: {
      twitterUsername: 'mattiaerre',
      when: new Date(2017, 2, 19, 9, 0, 0),
      where: {
        googleMapsShortUrl: 'https://goo.gl/maps/mvsGHqLtiCs'
      },
      note: ['eat', 'run', 'sleep', 'repeat']
    }
  };

  const tree = create(<App {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
