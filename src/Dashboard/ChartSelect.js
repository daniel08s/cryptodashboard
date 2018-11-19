import styled from 'styled-components';

import {purpleBackground, fontSize2, color6} from '../Shared/Styles';

const Select = styled.select`
  float: right;
  margin: 0;
  height: 25px;
  color: ${color6};
  ${purpleBackground}
  border: 1px solid #D0D0D0;
  border-radius: .25rem;
  cursor: pointer;
  outline: 0;
  ${fontSize2}

  & option {
    color: ${color6};
  }

  /* Undo the Firefox inner focus ring */
  &:focus:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 #000;
  }
  /* Dropdown arrow */
  &:after {
    position: absolute;
    top: 50%;
    right: 1.25rem;
    display: inline-block;
    content: "";
    width: 0;
    height: 0;
    margin-top: -.15rem;
    pointer-events: none;
    border-top: .35rem solid;
    border-right: .35rem solid transparent;
    border-bottom: .35rem solid transparent;
    border-left: .35rem solid transparent;
  }

  /* Active/open */
  &:active {
    color: ${color6};
  }

  /* Hide the arrow in IE10 and up */
  &::-ms-expand {
    display: none;
  }

  /* IE9 hack to hide the arrow */
  @media screen and (min-width:0\0) {
    & {
      z-index: 1;
      padding: .5rem 1.5rem .5rem 1rem;
    }
    &:after {
      z-index: 5;
    }
    &:before {
      position: absolute;
      top: 0;
      right: 1rem;
      bottom: 0;
      z-index: 2;
      content: "";
      display: block;
      width: 1.5rem;
      background-color: #eee;
    }
    &:hover,
    &:focus,
    &:active {
      color: ${color6};
      background-color: #eee;
    }
  }


  /* Input part is easier */
  input[type="text"],
  & {
    ${fontSize2}
  }
  .input-wrap {
    margin: 0 0 20px 0;
  }
  input[type="text"] {
    padding: 10px 15px;
    border-radius: 5px;
    border: 1px solid #D0D0D0;
    width: 100%;
    box-sizing: border-box; /* if you already aren't doing universally */
  }
`;

export default Select;
