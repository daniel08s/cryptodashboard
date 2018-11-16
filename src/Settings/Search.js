import React from 'react';
import styled from 'styled-components';
import { purpleBackground, fontSize2 } from '../Shared/Styles';

const SearchGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 170px);
`;

const SearchInput = styled.input`
  ${purpleBackground};
  ${fontSize2};
  color: #fff;
  border: 1px solid;
  border-radius: 3px;
  height: 25px;
  /* place-self: center left; */
  align-self: center;
  justify-self: left;
`;

export default () => {
  return (
    <SearchGrid>
      <h2>Search coins</h2>
      <SearchInput />
    </SearchGrid>
  );
};
