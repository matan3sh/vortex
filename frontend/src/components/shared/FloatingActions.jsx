import React, { useState } from 'react';

const FloatingActions = () => {
  const [active, setActive] = useState(false);

  return (
    <div
      className={`floatingActions ${active ? 'active' : ''}`}
      onClick={() => setActive(!active)}
    >
      <span>
        <i className='fab fa-flickr'></i>
      </span>
      <ul>
        <li>
          <i className='fab fa-facebook-f face-color'></i> הפייסבוק שלנו -
          Vortex
        </li>
        <li>
          <i className='fas fa-phone'></i> התקשרו 0542875357
        </li>
      </ul>
    </div>
  );
};

export default FloatingActions;
