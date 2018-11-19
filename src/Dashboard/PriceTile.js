import React from 'react';
import styled, { css } from 'styled-components';

import { AppContext } from '../App/AppProvider';
import { SelectableTile } from '../Shared/Tile';
import { fontSize3, fontSizeBig, greenBoxShadow, color5 } from '../Shared/Styles';
import { CoinHeaderGridStyled } from '../Settings/CoinHeaderGrid';

const numberFormat = number => +(number + '').slice(0, 7);

const JustifiedRight = styled.div`
  justify-self: right;
`;

const JustifiedLeft = styled.div`
  justify-self: left;
`;

const TickerPrice = styled.div`
  ${fontSizeBig};
`;

const ChangePct = styled.div`
  color: ${color5};
  ${props => props.negative && css`
    color: red;
  `}
`;

const PriceTileStyled = styled(SelectableTile)`
  ${props => props.compact && css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5px;
    justify-items: right;
    ${fontSize3}
  `}

  ${props => props.currentFavorite && css`
    ${greenBoxShadow}
    pointer-events: none;
  `}
`;

const ChangePercent = ({data}) => {
  return (
    <JustifiedRight>
      <ChangePct negative={data.CHANGEPCT24HOUR < 0} >
        {numberFormat(data.CHANGEPCT24HOUR)}%
      </ChangePct>
    </JustifiedRight>
  );
};

const PriceTileCompact = ({sym, data, currentFavorite, setCurrentFavorite}) => {
  return (
    <PriceTileStyled
      compact
      currentFavorite={currentFavorite}
      onClick={setCurrentFavorite}
    >
      <JustifiedLeft>{sym}</JustifiedLeft>
      <ChangePercent data={data} />
      <div>
        {numberFormat(data.PRICE)}€
      </div>
    </PriceTileStyled>
  );
};

const PriceTile = ({sym, data, currentFavorite, setCurrentFavorite}) => {
  return (
    <PriceTileStyled
      currentFavorite={currentFavorite}
      onClick={setCurrentFavorite}
    >
      <CoinHeaderGridStyled>
        <div>{sym}</div>
        <ChangePercent data={data} />
      </CoinHeaderGridStyled>
      <TickerPrice>
        {numberFormat(data.PRICE)}€
      </TickerPrice>
    </PriceTileStyled>
  );
};

export default ({price, index}) => {
  const sym = Object.keys(price)[0];
  const data = price[sym]['EUR'];
  const TileClass = index < 5 ? PriceTile : PriceTileCompact;

  return (
    <AppContext.Consumer>
      {({currentFavorite, setCurrentFavorite}) => (
        <TileClass
          sym={sym}
          data={data}
          currentFavorite={currentFavorite === sym}
          setCurrentFavorite={() => setCurrentFavorite(sym)}
        />
      )}
    </AppContext.Consumer>
  );
}
