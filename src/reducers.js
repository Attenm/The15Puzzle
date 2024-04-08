const initialState = {
    mode: null,
    result: null,
    steps: 0
}

export const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'setMode' : return {...state, mode: action.payload};
        case 'setResult' : return {...state, result: action.payload};
        case 'incrementSteps' : return {...state, steps: state.steps + action.payload};
        case 'resetGame' : return action.payload;
        default: return state;
    }
}