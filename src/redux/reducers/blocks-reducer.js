const ADD_BLOCK = 'TestBlocks/blocks-reducer/ADD_BLOCK';
const REMOVE_BLOCK = 'TestBlocks/blocks-reducer/REMOVE_BLOCK';
const TAKE_BLOCK = 'TestBlocks/blocks-reducer/TAKE_BLOCK';
const CHANGE_HUE = 'TestBlocks/blocks-reducer/CHANGE_HUE';

let initialState = []

const blocksReducer = (state = initialState, {status, id, text, hue, take, type}) => {
    switch (type) {
        case ADD_BLOCK:
            const block = {status, id, text, hue, take}
            return [...state, block]
        case REMOVE_BLOCK: {
            return [...state].filter(block => block.id !== id);
        }
        case TAKE_BLOCK: {
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
        }
        case CHANGE_HUE: {
            return [...state].map(block => {
                if (block.id === id) {
                    if (block.hue === "alert alert-success") {
                        return {...block, hue: "alert alert-danger"}
                    }
                    if (block.hue === "alert alert-danger") {
                        return {...block, hue: "alert alert-success"}
                    }
                }
                return block;
            })
        }
        default:
            return state;
    }
}


export const setBlock = (status, id, text, hue, take) => ({status, id, text, hue, take, type: ADD_BLOCK});
export const removeTask = (id) => ({id, type: REMOVE_BLOCK});
export const takeBlock = (id, take) => ({id, take, type: TAKE_BLOCK});
export const changeHue = (id) => ({id, type: CHANGE_HUE});

export default blocksReducer