import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import RecipeForm from './components/RecipeForm';
import FavoriteRecipes from './components/FavoriteRecipes';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={RecipeList} />
        <Route path="/recipe/:id" component={RecipeDetail} />
        <Route path="/add-recipe" component={RecipeForm} />
        <Route path="/favorites" component={FavoriteRecipes} />
      </Switch>
    </Router>
  );
};

export default App;
