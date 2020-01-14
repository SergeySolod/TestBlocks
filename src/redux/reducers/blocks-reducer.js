const ADD_BLOCK = 'TestBlocks/blocks-reducer/ADD_BLOCK';
const REMOVE_BLOCK = 'TestBlocks/blocks-reducer/REMOVE_BLOCK';

let initialState = []

const blocksReducer = (state = initialState, {id, text, hue, take, type}) => {
    switch (type) {
        case ADD_BLOCK:
           const block = {id, text, hue, take}
            return [...state, block]
        case REMOVE_BLOCK: {
            return [...state].filter(block => block.id !== id);
        }
        default:
            return state;
    }
}

export const setBlock = (id, text, hue, take) => ({id, text, hue, take, type: ADD_BLOCK});
export const removeTask = (id) => ({id, type: REMOVE_BLOCK});

export default blocksReducer