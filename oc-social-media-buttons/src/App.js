import React from 'react';
import styled from 'styled-components';

const data = [
  { className: 'icon-twitter', href: 'https://twitter.com/mattiaerre', text: '@mattiaerre' },
  { className: 'icon-instagram', href: 'https://www.instagram.com/mattiaerre2012', text: '@mattiaerre2012' },
  { className: 'icon-github', href: 'https://github.com/mattiaerre', text: 'mattiaerre' },
  { className: 'icon-wordpress', href: 'https://mattiarichetto.wordpress.com/', text: 'mattiarichetto' },
];

const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
  flex-wrap: wrap;
`;

const Li = styled.li`
  margin: 0 0.5em;
`;

const App = () => {
  const list = data.map(element => (
    <Li>
      <i className={element.className} />
      <a href={element.href} rel="noopener noreferrer" target="_blank">{element.text}</a>
    </Li>
  ));

  return (
    <Ul>
      {list}
    </Ul>
  );
};

export default App;
