import React from 'react';
import Blocks from "./pages/blocks/blocks";
import Sidebar from "./components/sidebar/sidebar";

function App() {
    return (
        <div className='container pt-4'>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <Sidebar/>
                </div>
                <div className="col-md-8">
                    <Blocks/>
                </div>
            </div>
        </div>
    );
}

export default App;
