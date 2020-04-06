import React from 'react';
import './JobDescription.css';

function JobDescription({ ad }) {
  return (
    <div className='jobDescriptionContainer'>
      <div className='companyImage'>
        <img src={ad.logo} alt={ad.company} />
      </div>
      <div className='jobInfo'>
        <div className='row'>
          <div className='companyName'>
            {ad.company}
          </div>
          {
            ad.new &&
            <div className='newAd'>
              {'new!'}
            </div>
          }
          {
            ad.featured &&
            <div className='featuredAd'>
              {'featured'}
            </div>
          }
        </div>
        <div className='row position'>
          {ad.position}
        </div>
        <div className='row'>
          <div className='adCondition'>
            {ad.postedAt}
          </div>
          <div className='separator' />
          <div className='adCondition'>
            {ad.contract}    
          </div>
          <div className='separator' />
          <div className='adCondition'>
            {ad.location}    
          </div>        
        </div>
      </div>
    </div>
  );
}

export default JobDescription;
