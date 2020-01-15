import React from 'react';
import {Route, Switch} from 'react-router-dom'

import Home from "./pages/home/home";
import BlockPage from "./pages/blocks/blockPage";
import {Navbar} from "./components/navbar/navbar";

function App() {
    return (
        <div>
            <Navbar/>
            <div className="container pt-4">
                <Switch>
                    <Route path='/' exact render={() => <Home/>}/>
                    <Route path='/blocks' exact render={() => <BlockPage/>}/>
                </Switch>
            </div>
        </div>
    );
}

export default App;

