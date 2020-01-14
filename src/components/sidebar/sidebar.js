import React from 'react'
import {connect} from 'react-redux'

const Sidebar = (props) => {
    const getTake = (blocks) => {
        return blocks.filter(block => block.take).length;
    }

    return (
        <div>
            <div className="alert alert-primary">Информация</div>
            <div className="alert alert-secondary">Всего: {props.blocks.length}</div>
            <div className="alert alert-warning">Выделенные: {getTake(props.blocks)}</div>
            <div className="alert alert-danger">Выделенные красные: {props.blocks.length}</div>
            <div className="alert alert-success">Выделенные зелёные: {props.blocks.length}</div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        blocks: state.blocks
    }
}

export default connect(mapStateToProps, null)(Sidebar);