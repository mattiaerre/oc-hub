import React, { PropTypes } from 'react';
import moment from 'moment';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
`;

const Wrapper = styled.section`
  padding: 2em;
  background: papayawhip;
  font-family: monospace;
  border: 1px solid grey;
`;

/* eslint-disable react/no-array-index-key */
const App = ({ model }) => { // eslint-disable-line arrow-body-style
  return (
    <Wrapper>
      <Title>{`@${model.twitterUsername}'s next run`}</Title>
      <p>{moment(model.when).format('MMMM Do YYYY, h:mm:ss a')}</p>
      <p>
        <a href={model.where.googleMapsShortUrl}>{model.where.googleMapsShortUrl}</a>
      </p>
      <ul>
        {model.note.map((element, index) => (<li key={index}>{element}</li>))}
      </ul>
    </Wrapper>
  );
};

App.propTypes = {
  model: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default App;
