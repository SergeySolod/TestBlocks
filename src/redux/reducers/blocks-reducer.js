const ADD_BLOCK = 'TestBlocks/blocks-reducer/ADD_BLOCK';

let initialState = {
    blocks: []
}

const blocksReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BLOCK:
            return {...state, blocks: [ ...state.blocks, ...action.block ]}
        default:
            return state;
    }
}

export const setBlock = (block) => ({type: ADD_BLOCK, block});

export default blocksReducer