import React from 'react';
import styled, { css } from 'styled-components';

import { SelectableTile } from '../Shared/Tile';
import { fontSize3, fontSizeBig } from '../Shared/Styles';
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
  color: greenyellow;
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

const PriceTileCompact = ({sym, data}) => {
  return (
    <PriceTileStyled compact>
      <JustifiedLeft>{sym}</JustifiedLeft>
      <ChangePercent data={data} />
      <div>
        {numberFormat(data.PRICE)}€
      </div>
    </PriceTileStyled>
  );
};

const PriceTile = ({sym, data}) => {
  return (
    <PriceTileStyled>
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
    <TileClass sym={sym} data={data} />
  );
}
