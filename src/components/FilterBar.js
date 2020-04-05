import React, { useContext } from 'react';
import { FilterContext } from '../context/FilterContext';
import FilterTag from './FilterTag';
import './FilterBar.css';

function FilterBar() {
  const {
    filters,
    onClearFilters
  } = useContext(FilterContext);
  let inactiveState = filters.length === 0 ? 'inactive' : '';
  return (
    <div className='filterBarContainer'>
      <div className={`filterBar ${inactiveState}`}>
        <div className='filterTags'>
          {
            filters.map(f => (
              <FilterTag filter={f} />
            ))
          }
        </div>
        <div className='clearTags'>
          <div
            onClick={() => onClearFilters()}
          >
            {'Clear'}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterBar;
