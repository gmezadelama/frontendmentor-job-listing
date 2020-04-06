import React from 'react';
import JobDescription from './JobDescription';
import JobFiltersSection from './JobFiltersSection';
import './Job.css';

function Job({ ad }) {
  return (
    <div className={`jobAdContainer ${ad.featured ? 'featured' : ''}`}>
      <div className='jobDescription'>
        <JobDescription ad={ad} />
      </div>
      <div className='jobFilterTags'>
        <JobFiltersSection ad={ad} />
      </div>
      
    </div>
  );
}

export default Job;
