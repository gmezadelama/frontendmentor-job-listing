import React from 'react';
import JobFilterTag from './JobFilterTag';

function JobFiltersSection({ ad: {role, level, languages, tools} } ) {
  let jobFilters = [role, level, ...(languages || []), ...(tools || [])];
  return (
    <div>
      {
        jobFilters.map((f, index) => (
          <JobFilterTag key={index} jobFilter={f} />
        ))
      }
    </div>
  );
}

export default JobFiltersSection;
