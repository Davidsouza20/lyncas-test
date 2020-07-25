import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Search from './pages/Search';
import Favorites from './pages/Favorites';

export default function Routes() {
    return (
    <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Search} />
            <Route path='/favoritos' component={Favorites} />
        </Switch>
    </BrowserRouter>
)}