import React from 'react';

import specializeIcon from '../../assets/img/specialize_icon.svg';
import pricesIcon from '../../assets/img/prices_icon.svg';
import qualityIcon from '../../assets/img/quality_icon.svg';

const Info = () => {
  return (
    <section className='info'>
      <h1 className='hero__font'>וורטקס שיפוצים</h1>
      <h1 className='hero__font primary'>פינוק לבית</h1>
      <div className='icons'>
        <div className='icon'>
          <img src={specializeIcon} alt='icon' />
          <div className='icon__info'>
            <p className='icon__top'>ייחודיות</p>
            <p className='icon__bottom'>עמידה בזמנים</p>
          </div>
        </div>
        <div className='icon'>
          <img src={pricesIcon} alt='icon' />
          <div className='icon__info'>
            <p className='icon__top'>מחירים</p>
            <p className='icon__bottom'>נוחים לכל כיס</p>
          </div>
        </div>
        <div className='icon'>
          <img src={qualityIcon} alt='icon' />
          <div className='icon__info'>
            <p className='icon__top'>איכות</p>
            <p className='icon__bottom'>תשוקה למקצוע</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
