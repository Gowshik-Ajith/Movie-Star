import React from 'react';
import {Route,Switch} from 'react-router-dom';

import HomePage from './Pages/homepage/home-page.component';
import SearchResultPage from './Pages/search-result-page/search-result-page.component';
import MovieInfoPage from './Pages/movie-info-page/movie-info-page.component';

import Header from './Components/Header/Header.component';
import {Footer} from './Components/Footer/Footer.component';
import {SearchBar} from './Components/SearchBar/SearchBar.component';

import './App.css';

function App() {
  return (
    <div>
      <Header title="Movie Star"/>
      <SearchBar className = {false ? "searchbarShow" : "searchbarHide" } />
      <hr />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/search" component={SearchResultPage} />
        <Route path="/search/:movieId" component={MovieInfoPage} />
      </Switch>
      <Footer content="By using this page you agree to our" link="User Agreement"/>
    </div>
  );
}

export default App;
