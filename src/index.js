import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./index.css";
import {BrowserRouter, Route} from "react-router-dom";

ReactDOM.render(
    (
        <BrowserRouter>
            <div>
                <Route exact path="/" component={App}/>
                <Route path="/:id" component={App}/>
            </div>
        </BrowserRouter>
    ),
    document.getElementById('root')
);
