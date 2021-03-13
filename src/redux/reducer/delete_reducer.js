// root reducer codes

const initialState = {
    isLoading: false,
    id: null,
    error: null,
};

const setTaskDelete = (state = initialState, action) => {
    switch (action.type) {
        case 'DELETE_START': {
            return {
                ...state,
                isLoading: true,
                id: action.payload
            };
        }
        case 'DELETE_SUCCESS': {

            return {
                ...state,
                error: null,
                isLoading: false,
                id: null
            };
        }
        case 'DELETE_ERROR': {
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


export default setTaskDelete;