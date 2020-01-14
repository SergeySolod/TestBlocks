const ADD_BLOCK = 'TestBlocks/blocks-reducer/ADD_BLOCK';
const REMOVE_BLOCK = 'TestBlocks/blocks-reducer/REMOVE_BLOCK';
const TAKE_BLOCK = 'TestBlocks/blocks-reducer/TAKE_BLOCK';

let initialState = []

const blocksReducer = (state = initialState, {id, text, hue, take, type}) => {
    switch (type) {
        case ADD_BLOCK:
            const block = {id, text, hue, take}
            return [...state, block]
        case REMOVE_BLOCK: {
            return [...state].filter(block => block.id !== id);
        }
        case TAKE_BLOCK:
            return [...state].map(block => {
                if (block.id === id) {
                    if (block.take === false) {
                        return {...block, take: true}
                    }
                    if (block.take === true) {
                        return {...block, take: false}
                    }
                }
                return block;
            })
        default:
            return state;
    }
}


export const setBlock = (id, text, hue, take) => ({id, text, hue, take, type: ADD_BLOCK});
export const removeTask = (id) => ({id, type: REMOVE_BLOCK});
export const takeBlock = (id, take) => ({id, take, type: TAKE_BLOCK});

export default blocksReducer