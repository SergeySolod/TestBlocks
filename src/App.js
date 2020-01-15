import React from 'react';
import Buttons from "./pages/blocks/buttons";
import Blocks from "./pages/blocks/blocks";
import Sidebar from "./components/sidebar/sidebar";

function App() {
    return (
        <div className='container pt-4'>
            <div className="row no-gutters">
                <div className="col-md-3">
                    <Sidebar/>
                </div>
                <div className="col-md-8 pl-5">
                    <Buttons/>
                    <Blocks/>
                </div>
            </div>
        </div>
    );
}

export default App;
