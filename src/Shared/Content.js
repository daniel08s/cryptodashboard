import React from 'react';

import { AppContext } from '../App/AppProvider';

export default function(props) {
  return (
    <AppContext.Consumer>
      {({coinList, prices, firstVisit, historical}) => {
        if (!coinList) {
          return <div>Loading coins...</div>
        }
        else if (!firstVisit && !prices) {
          return <div>Loading prices...</div>
        }
        return <div>{props.children}</div>
      }}
    </AppContext.Consumer>
  );
};
