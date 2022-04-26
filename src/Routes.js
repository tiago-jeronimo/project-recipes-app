import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Foods from './pages/Foods';
import Drinks from './pages/Drinks';
import RecipeDetailsFoods from './pages/RecipeDetailsFoods';
import RecipeDetailsDrinks from './pages/RecipeDetailsDrinks';
import FoodInProgress from './pages/FoodInProgress';
import DrinkInProgress from './pages/DrinkInProgress';
import Explore from './pages/Explore';
import ExploreFoods from './pages/ExploreFoods';
import ExploreDrinks from './pages/ExploreDrinks';
import ExploreFoodsIngredients from './pages/ExploreFoodsIngredients';
import ExploreDrinksIngredients from './pages/ExploreDrinksIngredients';
import ExploreFoodsNationalities from './pages/ExploreFoodsNationalities';
import Profile from './pages/Profile';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/Favoriterecipes';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={ Login } />
    <Route exact path="/foods" component={ Foods } />
    <Route exact path="/drinks" component={ Drinks } />
    <Route exact path="/foods/:id" component={ RecipeDetailsFoods } />
    <Route exact path="/drinks/:id" component={ RecipeDetailsDrinks } />
    <Route exact path="/foods/:id/in-progress" component={ FoodInProgress } />
    <Route exact path="/drinks/:id/in-progress" component={ DrinkInProgress } />
    <Route exact path="/explore" component={ Explore } />
    <Route exact path="/explore/foods" component={ ExploreFoods } />
    <Route exact path="/explore/drinks" component={ ExploreDrinks } />
    <Route exact path="/explore/foods/ingredients" component={ ExploreFoodsIngredients } />
    <Route exact path="/explore/drinks/ingredients" component={ ExploreDrinksIngredients } />
    <Route exact path="/explore/foods/nationalities" component={ ExploreFoodsNationalities } />
    <Route exact path="/profile" component={ Profile } />
    <Route exact path="/done-recipes" component={ DoneRecipes } />
    <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
  </Switch>
);

export default Routes;
