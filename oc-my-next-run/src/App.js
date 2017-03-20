import React, { PropTypes } from 'react';
import moment from 'moment';
import { Wrapper, Title } from './Styled';

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
