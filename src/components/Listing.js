import React, { useState, useEffect, useContext } from 'react';
import { DataContext } from '../context/DataContext';
import { FilterContext } from '../context/FilterContext';
import Job from './Job';
import './Listing.css';

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
  console.log('job data', data);
  return (
    <div className='listingContainer'>
     {
      data.map(ad => (
        <Job
          ad={ad}
          onAddFilter={onAddFilter}
        />
      ))
    } 
    </div>
  );
}

export default Listing;