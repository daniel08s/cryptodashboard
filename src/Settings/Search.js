import React from 'react';
import styled from 'styled-components';
import { debounce, pickBy } from 'lodash';
import fuzzy from 'fuzzy';

import { purpleBackground, fontSize2, color6 } from '../Shared/Styles';
import { AppContext } from '../App/AppProvider';

const SearchGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 170px);
`;

const SearchInput = styled.input`
  ${purpleBackground};
  ${fontSize2};
  color: ${color6};
  border: 1px solid;
  border-radius: 3px;
  height: 25px;
  /* place-self: center left; */
  align-self: center;
  justify-self: left;
`;

const handleFilter = debounce((inputValue, coinList, setFilteredCoins) => {
  // Get all the symbols
  const coinSymbols = Object.keys(coinList);

  // Get all the names and map the symbol to each name
  const coinNames = coinSymbols.map(symbol => coinList[symbol].CoinName);

  // Merge symbols and names
  const allStringsToSearch = coinSymbols.concat(coinNames);

  // Filter the results
  const results = fuzzy
    .filter(inputValue, allStringsToSearch)
    .map(result => result.string);
  const filteredCoins = pickBy(coinList, (result, symKey) => {
    const coinName = result.CoinName;
    return (results.includes(symKey) || results.includes(coinName));
  });
  setFilteredCoins(filteredCoins);
}, 500);

const filterCoins = (evt, setFilteredCoins, coinList) => {
  let inputValue = evt.target.value;
  if (!inputValue) {
    setFilteredCoins(null);
  }
  handleFilter(inputValue, coinList, setFilteredCoins);
};

export default () => {
  return (
    <AppContext.Consumer>
      {({setFilteredCoins, coinList}) => (
        <SearchGrid>
          <h2>Search coins</h2>
          <SearchInput onKeyUp={(evt) => filterCoins(evt, setFilteredCoins, coinList)} />
        </SearchGrid>
      )}
    </AppContext.Consumer>
  );
};
