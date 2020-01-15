import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {setBlock} from "../../redux/reducers/blocks-reducer";

const Buttons = (props) => {

    const addBlockSimple = () => {

        props.setBlock('simple', (new Date()).getTime(), (Math.random().toString(36).substring(2, 15)), 'alert alert-dark', false)
    };

    const addBlockComplete = () => {
        props.setBlock('complete', (new Date()).getTime(), (Math.random().toString(36).substring(2, 15)), 'alert alert-success', false)
    };


    return (
        <div className='pb-3'>
            <button onClick={addBlockSimple} className="btn btn-primary">Добавить простой блок</button>
            <button onClick={addBlockComplete} className="btn btn-success">Добавить сложный блок</button>
        </div>
    )
}

export default connect(null, {setBlock})(Buttons);