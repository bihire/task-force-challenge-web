import jwtDecode from 'jwt-decode';
import swal from 'sweetalert';
import { ADD_SUCCESS, ADD_FAILURE, ADD_START } from './action_type';
import { ALL_SUCCESS } from '../allUsers/action_type';
import { axiosCall } from '../../../services/httpservice';

export const addStart = (payload) => ({
    type: ADD_START,
});

export const successAdd = (payload) => ({
    type: ADD_SUCCESS,
    payload,
});

export const successAll = (payload) => ({
    type: ALL_SUCCESS,
    payload,
});


export const addError = (payload) => ({
    type: ADD_FAILURE,
    payload,
});


export const addAction = (data) => async (dispatch) => {
    dispatch(addStart());
    try {
        // const { email, password } = data;
        const response = await axiosCall.post('/auth/signup', {
            email: data.email,
            phoneNumber: data.phone_number,
            firstName: data.first_name,
            lastName: data.last_name,
            password: data.password,
            confirmPassword: data.confirm_password
        });
        

        const { token } = response.data.data;
        const decoded = jwtDecode(token);

        delete data.password
        delete data.confirm_password
        data.id = decoded.id
        dispatch(successAll([data]))
        swal({
            title: 'Success',
            text: `just added ${data.firstName}`,
            icon: 'success',
            timer: 3000,
            buttons: false,
        });
    } catch (error) {
        swal({
            title: 'error adding user',
            text: `${error.response.data.message}`,
            icon: 'error',
            timer: 3000,
            buttons: false,
        });
        return dispatch(addError(error.response.data));
    }
};
