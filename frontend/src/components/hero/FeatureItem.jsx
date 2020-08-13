import React from 'react';

const FeatureItem = ({ feature }) => {
  return (
    <div className='feature'>
      <img src={feature.img} alt='project-one' />
      <div className='feature__info'>
        <p className='feature__top'>{feature.title}</p>
        <p className='feature__bottom'>{feature.subtitle}</p>
      </div>
    </div>
  );
};

export default FeatureItem;
