import React from 'react';

import { AppContext } from '../App/AppProvider';
import { SelectableTile, DeletableTile, DisabledTile } from '../Shared/Tile';
import CoinHeaderGrid from './CoinHeaderGrid';
import CoinImage from '../Shared/CoinImage';

export default ({coinKey, topSection}) => {
  return (
    <AppContext.Consumer>
      {({coinList}) => {
        let coin = coinList[coinKey];

        let TileClass = SelectableTile;
        if(topSection) {
          TileClass = DeletableTile;
        }

        return (
          <TileClass>
            <CoinHeaderGrid name={coin.CoinName} symbol={coin.Symbol} topSection={topSection} />
            <CoinImage coin={coin} symbol={coin.Symbol} />
          </TileClass>
        );
      }}
    </AppContext.Consumer>
  );
};
