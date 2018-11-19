import React from 'react';
import ReactHighcharts from 'react-highcharts';

import highchartsConfig from './HighchartsConfig';
import { Tile } from '../Shared/Tile';
import { AppContext } from '../App/AppProvider';
import { purpleTheme } from './HighchartsTheme';

// Apply the theme
ReactHighcharts.Highcharts.setOptions(purpleTheme);

export default () => {
  return (
    <AppContext.Consumer>
      {({historical}) => (
        <Tile>
          {historical ?
            <ReactHighcharts config={highchartsConfig(historical)} /> :
            <div>Loading historical data...</div>
          }
        </Tile>
      )}
    </AppContext.Consumer>
  );
};
