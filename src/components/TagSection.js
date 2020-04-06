import React from 'react';
import FeatureTag from './FeatureTag';
import './TagSection';

function TagSection({ ad: {role, level, languages, tools} } ) {
  let features = [role, level, ...(languages || []), ...(tools || [])];
  return (
    <div className='tagSectionContainer'>
      {
        features.map((f, index) => (
          <FeatureTag key={index} feature={f} />
        ))
      }
    </div>
  );
}

export default TagSection;
