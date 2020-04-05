import React from 'react';
import JobDescription from './JobDescription';
import TagSection from './TagSection';
import './Job.css';

function Job({ ad }) {
  return (
    <div className={`jobAdContainer ${ad.featured ? 'featured' : ''}`}>
      <div className='jobDescription'>
        <JobDescription ad={ad} />
      </div>
      <div className='featureTags'>
        <TagSection ad={ad} />
      </div>
      
    </div>
  );
}

export default Job;
