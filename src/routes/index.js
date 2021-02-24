import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Error from '../components/error';
import CredintialPage from '../pages/credintials';
import HomePage from '../pages/home';

export default function index() {
    return (
        <Switch>
            
            <Route path="/" exact component={CredintialPage} />
            <Route path="/home" exact isPrivate component={HomePage} />
            <Route path="*" component={Error} />
        </Switch>
    );
}