import React, { useState } from 'react';
import { takeCategories } from '../App/generic';
import { Icon } from '@iconify/react';
import './Card.css';
import { CSSTransition } from "react-transition-group";

export default function Card({ item, key, handleClickTarget }) {
  const [isActive, setIsActive] = useState(false);

  const handleClickButton = () => {
    handleClickTarget(item);
  }

  return (
    <div className='card card-name'>
        <button onClick={handleClickButton} key={key} className='w-auto btn-ghost btn mb-1 justify-start'>
          <Icon className='mr-2' icon="octicon:dot-fill-16" color={takeCategories(item)} width="18" height="18"/>
          <div className={isActive ? 'active line' : 'line'}>{item.targetName}</div>
        </button>
        <input onClick={() => setIsActive(!isActive)} type="checkbox" className="checkbox ml-auto mb-1" />
    </div>
  )
}
