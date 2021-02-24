// root reducer codes

const initialState = {
    isLoading: false,
    user: {},
    error: null,
};

const signInUser = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_START': {
            return {
                ...state,
                isLoading: true,
            };
        }
        case 'LOGIN_SUCCESS': {
            return {
                ...state,
                user: { ...action.payload },
                error: null,
                isLoading: false,
            };
        }
        case 'LOGIN_ERROR': {
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


export default signInUser;