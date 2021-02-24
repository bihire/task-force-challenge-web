// root reducer codes

const initialState = {
    isLoading: false,
    addedUser: {},
    error: null,
};

const addUser = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_START': {
            return {
                ...state,
                isLoading: true,
            };
        }
        case 'ADD_SUCCESS': {
            
            return {
                ...state,
                user: { ...action.payload },
                error: null,
                isLoading: false,
            };
        }
        case 'ADD_ERROR': {
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


export default addUser;