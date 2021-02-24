// root reducer codes

const initialState = {
    isLoading: false,
    all: [],
    error: null,
};

const allUsers = (state = initialState, action) => {
    switch (action.type) {
        case 'ALL_START': {
            return {
                ...state,
                isLoading: true,
            };
        }
        case 'ALL_SUCCESS': {
            console.log(state.all)
            return {
                ...state,
                all: [...action.payload, ...state.all ],
                error: null,
                isLoading: false,
            };
        }
        case 'ALL_ERROR': {
            return {
                ...state,
                error: action.error,
                isLoading: false,
            };
        }
        default: {
            return state;
        }
    }
};


export default allUsers;