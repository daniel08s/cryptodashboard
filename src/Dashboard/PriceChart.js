import React from 'react';
import ReactHighcharts from 'react-highcharts';

import highchartsConfig from './HighchartsConfig';
import { Tile } from '../Shared/Tile';
import { AppContext } from '../App/AppProvider';

export default () => {
  return (
    <AppContext.Consumer>
      {() => (
        <Tile>
          <ReactHighcharts config={highchartsConfig()} />
        </Tile>
      )}
    </AppContext.Consumer>
  );
};
