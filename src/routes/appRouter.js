import React, {useState, useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route,
} from "react-router-dom";

import Home from "../pages/home";
import Checkout from "../pages/checkout";


const AppRouter = () => {


    return (
        <Router>
            <Switch>
                <Route path="/checkout" component={Checkout}/>
                <Route path="/" component={Home}/>
            </Switch>
        </Router>
    );
};

export default AppRouter;







