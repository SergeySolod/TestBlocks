const ADD_BLOCK = 'TestBlocks/blocks-reducer/ADD_BLOCK';

let initialState = [{
    id: 1,
    text: 'Посмотреть и законспектировать 97 урок по React/Redux',
    hue: 'white',
    take: false,
}
]

const blocksReducer = (state = initialState, {id, text, hue, take, type}) => {
    switch (type) {
        case ADD_BLOCK:
            return [...state, {id, text, hue, take}]
        default:
            return state;
    }
}

export const setBlock = (id, text, hue, take) => ({type: ADD_BLOCK, id, text, hue, take});

export default blocksReducer