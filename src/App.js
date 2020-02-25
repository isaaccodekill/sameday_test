import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Layout from "./components/ui/layout/layout";
// import NotFound from './pages/'
import OrdersPage from './pages/orderPage/orderPage'
import Home from './pages/home/home.js'
import SingleOrderPage from './pages/singleOrderPage/singleOrderPage'


function App() {
  return (
    <div className="App">
        <Switch>
            <Route exact path="/Operations/Production-house" component={OrdersPage}/>
            <Route path="/Operations/Production-house/:id" component={SingleOrderPage} />
            {/*<Route path="/" component={} />*/}
            <Route component={Home} />
        </Switch>
    </div>
  );
}

export default App
