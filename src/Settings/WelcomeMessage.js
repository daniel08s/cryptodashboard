import React from 'react';
import { AppContext } from '../App/AppProvider';

export default function ({firstVisit}) {
  return (
    <AppContext.Consumer>
      {({firstVisit}) => (
        firstVisit ?
          <div>
            Welcome to Crypto-Board, please select your favorite coins to start.
          </div> : null
      )}
    </AppContext.Consumer>
  );
}
