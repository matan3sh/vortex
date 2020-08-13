import React from 'react';

import project1 from '../../assets/img/project_1.jpg';
import project2 from '../../assets/img/project_2.jpg';
import project3 from '../../assets/img/project_3.jpg';
import project4 from '../../assets/img/project_4.jpg';

const Project = () => {
  return (
    <div className='container'>
      <div className='project'>
        <div className='project__card'>
          <img src={project1} alt='' />
          <div className='project__content'>
            <h3>שיפוץ חדר אמבטיה</h3>
            <p>חיפוי קרמיקה במטבח ובמרפסת</p>
          </div>
        </div>
        <div className='project__card'>
          <img src={project2} alt='' />
          <div className='project__content'>
            <h3>שיפוץ חדר אמבטיה</h3>
            <p>ריצוף קרמיקה דמוי פרקט</p>
          </div>
        </div>
        <div className='project__card'>
          <img src={project3} alt='' />
          <div className='project__content'>
            <h3>שיפוץ חדר אמבטיה</h3>
            <p>מיזוג חדר שירותים ומקלחת, ריצוף וחיפוי קרמיקה</p>
          </div>
        </div>
        <div className='project__card'>
          <img src={project4} alt='' />
          <div className='project__content'>
            <h3>שיפוץ מטבח</h3>
            <p>חיפוי קרמיקה + דקור</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
