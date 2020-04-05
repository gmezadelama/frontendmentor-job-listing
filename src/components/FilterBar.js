import React, { useContext } from 'react';
import { FilterContext } from '../context/FilterContext';
import './FilterBar.css';

function FilterBar() {
  const {
    filters,
    onRemoveFilter,
    onClearFilters
  } = useContext(FilterContext);
  return (
    <div className='filterBarContainer'>
      <div className='filterBar'>

      </div>
    </div>
  );
}

export default FilterBar;
