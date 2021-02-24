import jwtDecode from 'jwt-decode';
import swal from 'sweetalert';
import history from '../../../utils/history';
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_START } from './action_types';
import { axiosCall } from '../../../services/httpservice';

export const loginStart = (payload) => ({
    type: LOGIN_START,
});

export const successLogin = (payload) => ({
    type: LOGIN_SUCCESS,
    payload,
});

export const LoginError = (payload) => ({
    type: LOGIN_FAILURE,
    payload,
});


export const loginAction = (data) => async (dispatch) => {
    dispatch(loginStart());
    try {
        const { email, password } = data;
        const response = await axiosCall.post('/auth/signin', {
            email,
            password,
        });
        const { token } = response.data.data;
        localStorage.setItem('barefoot_nomad_token', token);
        await dispatch(successLogin(jwtDecode(token)));
        history.push('/home');
        swal({
            title: 'Successfully loggedIN',
            text: `welcome`,
            icon: 'success',
            timer: 3000,
            buttons: false,
        });
    } catch (error) {
        swal({
            title: 'Login error',
            text: `${error.response.data.message}`,
            icon: 'error',
            timer: 3000,
            buttons: false,
        });
        return dispatch(LoginError(error.response.data));
    }
};
// export default {
//     loginAction,
// };
