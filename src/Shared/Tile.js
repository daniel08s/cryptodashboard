import styled from 'styled-components';

import { subtleBoxShadow2, purpleBackground, greenBoxShadow, redBoxShadow } from './Styles';

export const Tile = styled.div`
  ${subtleBoxShadow2}
  ${purpleBackground}
  padding: 10px;
  display: grid;
  grid-template-rows: 0.75fr 1fr;
`;

export const SelectableTile = styled(Tile)`
  &:hover {
    cursor: pointer;
    ${greenBoxShadow}
  }
`;

export const DeletableTile = styled(SelectableTile)`
  &:hover {
    cursor: pointer;
    ${redBoxShadow}
  }
`;

export const DisabledTile = styled(Tile)`
  pointer-events: none;
  opacity: 0.4;
`;
