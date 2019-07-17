import * as React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// tslint:disable-next-line:no-implicit-dependencies
import { RegisterConnector } from '../modules/register/RegisterConnector';




export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact={true} path="/register" component={RegisterConnector} />
            </Switch>
        </BrowserRouter>
    )
};