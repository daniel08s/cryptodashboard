import React from 'react';
import ReactHighcharts from 'react-highcharts';

import highchartsConfig from './HighchartsConfig';
import { Tile } from '../Shared/Tile';
import { AppContext } from '../App/AppProvider';
import { purpleTheme } from './HighchartsTheme';
import ChartSelect from './ChartSelect';

// Apply the theme
ReactHighcharts.Highcharts.setOptions(purpleTheme);

export default () => {
  const options = [
    {label: 'Days', value: 'days'},
    {label: 'Weeks', value: 'weeks'},
    {label: 'Months', value: "months"},
  ];

  return (
    <AppContext.Consumer>
      {({historical, changeChartSelect}) => (
        <Tile>
          <ChartSelect
            defaultValue="months"
            onChange={e => changeChartSelect(e.target.value)}
          >
            {options.map((option) => {
                return (
                  <option
                    value={option.value}
                    key={`priceChartOption-${option.value}`}
                  >
                    {option.label}
                  </option>
                )
              })
            }
          </ChartSelect>
          {historical ?
            <ReactHighcharts config={highchartsConfig(historical)} /> :
            <div>Loading historical data...</div>
          }
        </Tile>
      )}
    </AppContext.Consumer>
  );
};
