import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {changeHue, removeTask, takeBlock} from "../../redux/reducers/blocks-reducer";

const Blocks = (props) => {

    const removeBlock = (id) => {
        let shoudRemove = window.confirm('Вы уверены, что хотите удалить элемент?')
        if (shoudRemove) {
            props.removeTask(id)        }
    }


    if (!props.blocks) {
        return <div>Загрузка...</div>
    }
    console.log(props)
    return (
        <div className="row">
            {
                props.blocks.map(block => <div className='col-sm-4 col-lg-4 col-md-4 book-list'
                                               key={block.id}>
                    <div className={block.take ? 'alert alert-warning card' : 'alert alert-light card'}
                         onClick={() => props.takeBlock(block.id, true)}
                         onDoubleClick={() => props.changeHue(block.id)}
                    >

                            <div className={block.hue}>
                                <div className="card-body">
                                    <div onClick={() => removeBlock(block.id)}
                                         className="fas fa-times">&#10008;</div>
                                    <h5 className="card-title">{block.text}</h5>
                                </div>

                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        blocks: state.blocks
    }
}

export default connect(mapStateToProps, {removeTask, takeBlock, changeHue})(Blocks);