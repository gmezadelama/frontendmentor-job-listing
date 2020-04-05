import React, { useContext } from 'react';
import { FilterContext } from '../context/FilterContext';
import './FeatureTag.css';

function FeatureTag({ feature }) {
  const {
    filters, onAddFilter
  } = useContext(FilterContext);
  const onClickFeature = () => {
    onAddFilter(feature);
  }
  return (
    <div
      className={`filterButton ${filters.indexOf(feature) >= 0 ? 'selected' : ''}`}
      onClick={onClickFeature}
    >
      {feature}
    </div>
  );
}

export default FeatureTag;