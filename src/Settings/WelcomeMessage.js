import React from 'react';
import { AppContext } from '../App/AppProvider';

export default function ({firstVisit}) {
  return (
    <AppContext.Consumer>
      {({firstVisit}) => (
        firstVisit ?
          <div>
            Welcome to CryptoDashboard, please select your favorite coin to start.{' '}
          </div> : null
      )}
    </AppContext.Consumer>
  );
}
