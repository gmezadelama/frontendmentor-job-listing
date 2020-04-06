import React from 'react';
import JobFilterTag from './JobFilterTag';
import './JobFilterSection.css';

function JobFiltersSection({ ad: {role, level, languages, tools} } ) {
  let jobFilters = [role, level, ...(languages || []), ...(tools || [])];
  return (
    <div className='jobFilterSectionContainer'>
      {
        jobFilters.map((f, index) => (
          <JobFilterTag key={index} jobFilter={f} />
        ))
      }
    </div>
  );
}

export default JobFiltersSection;
