import React, { useContext } from 'react';
import { FilterContext } from '../context/FilterContext';
import './FilterTag.css';

function FilterTag({ filter }) {
  const {
    onRemoveFilter
  } = useContext(FilterContext);
  return (
    <div className='filterTag'>
      <div className='filterTagLabel'>
        {filter}
      </div>
      <div
        className='filterTagRemoveButton'
        onClick={() => onRemoveFilter(filter)}
      >
        <img height='14' width='14' src={'/images/icon-remove.svg'} alt={'Remove filter'} />
      </div>
    </div>
  );
}

export default FilterTag;
