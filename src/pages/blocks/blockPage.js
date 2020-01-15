import React from 'react'
import Sidebar from '../../components/sidebar/sidebar'
import Buttons from '../../pages/blocks/buttons'
import Blocks from '../../pages/blocks/blocks'

const BlockPage = () => {
    return (
        <div className="row no-gutters">
            <div className="col-md-3">
                <Sidebar/>
            </div>
            <div className="col-md-8 pl-5">
                <Buttons/>
                <Blocks/>
            </div>
        </div>
    )
}

export default BlockPage;