import './App.css';
import Drawer from '../Drawer/Drawer';
import SelectMenu from '../SelectMenu/SelectMenu';
import { useState } from 'react';
import { targetsCategory, targetsList, targetsFilter, takeCategories, generateColor, categoryFilter } from './generic';
import DescriptionCard from '../DescriptionCard/DescriptionCard';
import { CSSTransition } from "react-transition-group";

function App() {
  const [categories, setCategories] = useState(targetsCategory);
  const [targets, setTargets] = useState(targetsList);
  const [showDescription, setShowDescription] = useState(false);
  const [currentTarget, setCurrentTarget] = useState('');
  const [searchRequest, setSearchRequest] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const takeTarget = (newTarget) => {
    const targetsListCopy = targets;

    if(takeCategories(newTarget) === undefined) {
      const categoriesListCopy = categories;
      categoriesListCopy.push({categoryName: newTarget.category, color: generateColor()})
      setCategories(categoriesListCopy);
    };
    
    targetsListCopy.push(newTarget);
    setTargets(targetsListCopy);
  };

  const handleClose = () => {
    setShowDescription(false);
  }

  const handleClickTarget = (item) => {
    setCurrentTarget(item);
    setShowDescription(true);
  }

  const handleSearchRequest = (request) => {
    setSearchRequest(request);
    
    if(request === '') {
      setSearchResult(targets);
    } else {
      setSearchResult(targetsFilter(request, targets));
    }
  }

  return (
    <div className="App p-5 app-container" data-theme="light">
      <Drawer 
        targetsCategory={categories} 
      />
      <SelectMenu 
        takeTarget={takeTarget} 
        tasksList={searchRequest === '' ? targets : searchResult} 
        categoriesList={categories} 
        handleClickTarget={handleClickTarget}
        searchRequest = {searchRequest}
        handleSearchRequest = {handleSearchRequest}
      />
      <CSSTransition
        in={showDescription}
        timeout={300}
        classNames="description-sidebar"
        unmountOnExit
      >
        <DescriptionCard target={currentTarget} handleClose={handleClose}/>
      </CSSTransition>
    </div>
  );
}

export default App;
