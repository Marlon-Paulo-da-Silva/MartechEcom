import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from "../pages/Home";
import { Signinlogin } from '../pages/Signinlogin';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/signinlogin" component={Signinlogin}/>
      </Switch> 
    </BrowserRouter>
  )
}