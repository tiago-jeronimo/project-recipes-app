import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Foods from './Pages/Foods';
import Drinks from './Pages/Drinks';
import RecipeDetailsFoods from './Pages/RecipeDetailsFoods';
import RecipeDetailsDrinks from './Pages/RecipeDetailsDrinks';
import RecipeInProgress from './Pages/RecipeInProgress';
import RecipeInProgress from './Pages/RecipeInProgress';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={ Login } />
    <Route exact path="/foods" component={ Foods } />
    <Route exact path="/drinks" component={ Drinks } />
    <Route exact path="/foods/:id" component={ RecipeDetailsFoods } />
    <Route exact path="/drinks/:id" component={ RecipeDetailsDrinks } />
    <Route exact path="/foods/:id/in-progress" component={ RecipeInProgress } />
    <Route exact path="/" component={ Login } />
    <Route exact path="/" component={ Login } />
    <Route exact path="/" component={ Login } />
    <Route exact path="/" component={ Login } />
    <Route exact path="/" component={ Login } />
    <Route exact path="/" component={ Login } />
  </Switch>
);

export default Routes;
