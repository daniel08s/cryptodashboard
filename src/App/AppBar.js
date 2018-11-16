import React from 'react';

import styled, { css } from 'styled-components';
import { AppContext } from './AppProvider';

const Logo = styled.div`
  font-size: 1.5em;
`;

const Bar = styled.div`
  display: grid;
  margin-bottom: 40px;
  grid-template-columns: 150px auto 80px 80px;
`;

const ControlButtonElem = styled.div`
  cursor: pointer;

  ${props => props.active && css`
    text-shadow: 0px 0px 60px #fff;
    text-decoration: underline;
  `}
`;

function toProperCase(lower) {
  return lower.charAt(0).toUpperCase() + lower.substr(1);
}

function ControlButton({name}) {
  return (
    <AppContext.Consumer>
      {({page, setPage}) => (
        <ControlButtonElem
          active={page === name}
          onClick={() => setPage(name)}
        >
          {toProperCase(name)}
        </ControlButtonElem>
      )}
    </AppContext.Consumer>
  )
}

export default function() {
  return (
    <Bar>
      <Logo>Crypto-Board</Logo>
      <div></div>
      <ControlButton name="dashboard" />
      <ControlButton name="settings" />
    </Bar>
  );
}
