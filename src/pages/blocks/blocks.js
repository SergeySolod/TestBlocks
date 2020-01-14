import React, {useEffect} from 'react'
import {connect} from 'react-redux'

const Blocks = (props) => {

    if (!props.blocks) {
        return <div>Загрузка...</div>
    }
console.log(props.blocks)
    return (
        <div className="row">
            {
                props.blocks.map(block => <div className='col-sm-3 col-lg-3 col-md-3 book-list'
                                               key={block.id}>
                    <div className="thumbnail">
                        <div className="card">


                            <div className={block.hue}>
                                <div className="card-body">
                                    <h5 className="card-title">{block.text}</h5>
                                    <p className='itemButton'>
                                    </p>
                                </div>
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

export default connect(mapStateToProps, null)(Blocks);