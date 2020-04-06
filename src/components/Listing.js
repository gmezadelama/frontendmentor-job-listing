import React, { useState, useEffect, useContext } from 'react';
import { DataContext } from '../context/DataContext';
import { FilterContext } from '../context/FilterContext';
import Job from './Job';

function Listing(onAddFilter) {
  const [data, setData] = useState([]);
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