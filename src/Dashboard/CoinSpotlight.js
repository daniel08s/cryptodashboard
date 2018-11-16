import React from 'react';
import styled from 'styled-components';

import { Tile } from '../Shared/Tile';
import { AppContext } from '../App/AppProvider';
import CoinImage from '../Shared/CoinImage';

const SpotlightName = styled.h2`
  text-align: center;
`;

export default () => {
  return (
    <AppContext.Consumer>
      {({currentFavorite, coinList}) => (
        <Tile>
          <SpotlightName>{coinList[currentFavorite].CoinName}</SpotlightName>
          <CoinImage coin={coinList[currentFavorite]} spotlight />
        </Tile>
      )}
    </AppContext.Consumer>
  );
};
