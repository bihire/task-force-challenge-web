// root reducer codes

const initialState = {
    isLoading: false,
    id: null,
    error: null,
};

const setTaskDone = (state = initialState, action) => {
    switch (action.type) {
        case 'DONE_START': {
            return {
                ...state,
                isLoading: true,
                id: action.payload
            };
        }
        case 'DONE_SUCCESS': {

            return {
                ...state,
                error: null,
                isLoading: false,
                id: null
            };
        }
        case 'DONE_ERROR': {
            return {
                ...state,
                error: action.error,
                isLoading: false,
                id: null
            };
        }
        default: {
            return state;
        }
    }
};


export default setTaskDone;