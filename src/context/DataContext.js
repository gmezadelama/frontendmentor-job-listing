import React, { createContext } from 'react';
import { getData } from '../api/api';

let DataContext;
const { Provider, Consumer }  = (DataContext = createContext(getData));

function DataProvider(props) {
  return (
    <Provider value={getData}>
      {props.children}
    </Provider>
  );
}

export {
  DataContext,
  DataProvider,
  Consumer as DataConsumer
};
