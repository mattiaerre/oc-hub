import React from 'react';
import { create } from 'react-test-renderer';
import { matcher, serializer } from 'jest-styled-components';
import { Title, Wrapper } from './Styled';

expect.extend(matcher);
expect.addSnapshotSerializer(serializer);

test('Title', () => {
  const tree = create(<Title>Hello from oc-my-next-run Title</Title>).toJSON();
  expect(tree).toMatchStyledComponentsSnapshot();
});

test('Wrapper', () => {
  const tree = create(<Wrapper>Hello from oc-my-next-run Wrapper</Wrapper>).toJSON();
  expect(tree).toMatchStyledComponentsSnapshot();
});
