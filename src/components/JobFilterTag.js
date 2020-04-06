import React, { useContext } from 'react';
import { FilterContext } from '../context/FilterContext';
import './JobFilterTag.css';

function JobFilterTag({ jobFilter }) {
  const {
    filters, onAddFilter
  } = useContext(FilterContext);
  const onClickJobFilter = () => {
    onAddFilter(jobFilter);
  }
  return (
    <div
      className={`jobFilterButton ${filters.indexOf(jobFilter) >= 0 ? 'selected' : ''}`}
      onClick={onClickJobFilter}
    >
      {jobFilter}
    </div>
  );
}

export default JobFilterTag;