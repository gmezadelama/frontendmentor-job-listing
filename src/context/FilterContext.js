import React, { useState, createContext } from 'react';

let FilterContext;
const {
  Provider,
  Consumer
} = (FilterContext = createContext());

function FilterProvider(props) {
  const [filters, setFilters] = useState([]);
  const onAddFilter = (filter) => {
    if (filters.indexOf(filter) >= 0) return;
    setFilters([...filters, filter]);
  }
  const onRemoveFilter = (filter) => {
    if (filters.indexOf(filter) < 0) return;
    setFilters(filters.filter(f => f !== filter));
  }
  const onClearFilters = () => {
    setFilters([]);
  }
  return (
    <Provider value={{
      filters,
      onAddFilter,
      onRemoveFilter,
      onClearFilters
    }}>
      {props.children}
    </Provider>
  );
  
}

export {
  FilterContext,
  FilterProvider,
  Consumer as FilterConsumer
};
