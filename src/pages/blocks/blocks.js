import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {setBlock} from "../../redux/reducers/blocks-reducer";

const Blocks = (props) => {

    const addBlockSimple = () => {
        const block = {
            id: (new Date()).getTime(),
            text: (Math.random().toString(36).substring(2, 15)),
            color: 'white',
            take: false
        };
        props.setBlock(block)
    };

    const addBlockComplete = () => {
        const block = {
            id: (new Date()).getTime(),
            text: (Math.random().toString(36).substring(2, 15)),
            color: 'green',
            take: false
        };
        props.setBlock(block)
    };


    return (
        <div>
            <button onClick={addBlockSimple} className="btn btn-primary">Добавить простой блок</button>
            <button onClick={addBlockComplete} className="btn btn-primary">Добавить сложный блок</button>
        </div>
    )
}

export default connect(null, {setBlock})(Blocks);