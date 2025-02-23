export const initialState = {
    user: {
        whoseTurn: false,
        currentPlayer: 'O',
        field: ['', '', '', '', '', '', '', '', ''],
    }
}

const reducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'WHOSE_TURN': {
            return {
                ...state,
                user: {
                    ...state.user,
                    whoseTurn: payload
                }
            }
        }
        case 'PLAYER': {
            return {
                ...state,
                user: {
                    ...state.user,
                    currentPlayer: payload
                }
            }
        }
        case 'RESET': {
            return {
                ...state,
                user: {
                    ...state.user,
                    field: payload
                }
            }
        }
        default: return state;
    }

}

export default reducer;