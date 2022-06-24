import * as model from '../js/model';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView';
import resultView from './views/resultView';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';


if(module.hot){
  module.hot.accept();
}
const controlRecipes = async function(){
 
  try{
    
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpinner();
   
    // 1) Loading recipe
   
    await model.loadRecipe(id);
    const {recipe} = model.state;
    // 2) Rendering recipe
    recipeView.render(model.state.recipe);
    
  }catch(err){
   recipeView.renderError()
  }
}
const controlSearchResults = async function(){
  try {
     
    //1. get search query
    const query = searchView.getQuery();
    if(!query) return;
    resultView.renderSpinner();
   // 2. load search result
    await model.loadSearchResults(query);

    //.3 Render results
    resultView.render(model.state.search.results);
   
   
  } catch (err) {
    console.log(err)
  }
}

controlSearchResults();

const init = function(){
 recipeView.addHandlerRender(controlRecipes)
 searchView.addHandlerSearch(controlSearchResults);
}

init();
// ['hashchange','load'].foreach(ev => window.addEventListener(ev, controlRecipes ));
