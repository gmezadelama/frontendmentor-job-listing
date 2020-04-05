import React from 'react';
import './App.css';
import FilterBar from './components/FilterBar';
import Listing from './components/Listing';
import { DataProvider } from './context/DataContext';
import { FilterProvider } from './context/FilterContext';

function App() {
  return (
    <DataProvider>
      <FilterProvider>
        <div className='App'>
          <div className='App-header' />
          <div className='App-body'>
            <FilterBar />
            <Listing />
          </div>
        </div>
      </FilterProvider>
    </DataProvider>
  );
}

export default App;
