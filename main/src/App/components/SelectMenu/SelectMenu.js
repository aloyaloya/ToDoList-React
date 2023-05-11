import React from 'react';
import './SelectMenu.css';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import Card from './Card';
import { CSSTransition } from "react-transition-group";

export default function SelectMenu({ takeTarget, tasksList, handleClickTarget, searchRequest, handleSearchRequest }) {
  const [addTarget, setAddTarget] = useState(false);
  const [errorStatus, setErrorStatus] = useState(false);
  const [newTarget, setNewTarget] = useState({targetName: '', category: '', description: ''});

  const targetCheck = () => {
    if(newTarget.targetName !== '' && newTarget.category !== '' && newTarget.description !== '') {
      takeTarget(newTarget);
      setAddTarget(false);
    } else {
      setErrorStatus(true);
    };
  }

  const handleClickAddTarget = () => {
    setNewTarget({targetName: '', category: '', description: ''});
    setErrorStatus(false);
    setAddTarget(!addTarget);
  }

  return (
    <div className="p-5 h-full w-[40%] md:min-w-[100%] card bg-base-300 rounded-box">
        <input 
          type="text" 
          placeholder="Type here" 
          className="input max-w-full"
          value={searchRequest}
          onChange={(e) => handleSearchRequest(e.target.value)}
        />

        <button onClick={handleClickAddTarget} className='btn-ghost btn mt-4'>
          {!addTarget && (<Icon className='mr-2 btn-icon' icon="ic:round-plus" width="18" height="18" />)}
          {addTarget && (<Icon className='mr-2 btn-icon' icon="basil:cross-outline" width="24" height="24" /> )}
          Add Target
        </button>

        <CSSTransition
          in={addTarget}
          timeout={300}
          classNames="inputs"
          unmountOnExit
        >
          <div className='grid'>
            <input 
              type="text" 
              value={newTarget.targetName} 
              onChange={(e) => setNewTarget({targetName: e.target.value, category: newTarget.category, description: newTarget.description})} 
              placeholder="Target name" 
              className="inputs input max-w-full mt-4"
            />
            <input 
              type="text" 
              value={newTarget.category} 
              onChange={(e) => setNewTarget({targetName: newTarget.targetName, category: e.target.value, description: newTarget.description})}
              placeholder="Target category" 
              className="inputs input max-w-full mt-4"
            />
            <textarea 
              className="inputs text-base h-[120px] textarea mt-4" 
              value={newTarget.description} 
              onChange={(e) => setNewTarget({targetName: newTarget.targetName, category: newTarget.category, description: e.target.value})}
              placeholder="Target description">
            </textarea>
            <button onClick={targetCheck} className='inputs btn mt-4'>
              <Icon className='mr-2 btn-icon' icon="eva:checkmark-fill" width="18" height="18" />
              Okey
            </button>
            <CSSTransition
              in={errorStatus}
              timeout={300}
              classNames="inputs"
              unmountOnExit
            >
              <div className="alert shadow-lg mt-4">
                <span className='pl-4'>Fill in all the fields.</span>
              </div>
            </CSSTransition>
          </div>
        </CSSTransition>

        <div className='grid mt-4'>
          {tasksList.length !== 0 && tasksList.map((item, key) => {
            return (<Card item={item} key={key} handleClickTarget={handleClickTarget}/>)
          })} 
          {tasksList.length === 0 && (
            <div className='message flex justify-center font-bold mt-[35%]'>
              Targets not found
              <Icon className='ml-2 btn-icon' icon="material-symbols:sentiment-sad-outline-rounded" width="24" height="24" />
            </div>)
          }
        </div>
    </div>
  )
}
