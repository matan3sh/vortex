import React from 'react';
import FeatureItem from './FeatureItem';

import project1 from '../../assets/img/project_1.jpg';
import project2 from '../../assets/img/project_2.jpg';
import project3 from '../../assets/img/project_3.jpg';

const features = [
  {
    title: 'שיפוץ חדר אמבטיה',
    subtitle: 'חיפוי קרמיקה במטבח ובמרפסת',
    img: project1,
  },
  {
    title: 'שיפוץ חדר אמבטיה',
    subtitle: 'ריצוף קרמיקה דמוי פרקט',
    img: project2,
  },
  {
    title: 'שיפוץ חדר אמבטיה',
    subtitle: 'מיזוג חדר שירותים ומקלחת',
    img: project3,
  },
];

const FeatureList = () => {
  return (
    <section className='features'>
      {features.map((feature, index) => (
        <FeatureItem feature={feature} key={index} />
      ))}
    </section>
  );
};

export default FeatureList;
