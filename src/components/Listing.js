import React, { useState, useEffect, useContext } from 'react';
import { DataContext } from '../context/DataContext';
import { FilterContext } from '../context/FilterContext';
import Job from './Job';
// this is only for the preview view on frontend mentor, in a real app 
// the default value should be an empty array
import defaultData from '../api/data/data.json';

function Listing(onAddFilter) {
  const [data, setData] = useState(defaultData);
  const getData = useContext(DataContext);
  const {
    filters
  } = useContext(FilterContext);
  useEffect(() => {
    const fetchData = async () => {
      const result = await getData(filters);
      setData(result);
    }
    fetchData();
  }, [filters, getData]);
  return (
    <div>
     {
      data.map(ad => (
        <Job
          key={ad.id}
          ad={ad}
          onAddFilter={onAddFilter}
        />
      ))
    } 
    </div>
  );
}

export default Listing;