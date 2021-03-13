// import jwtDecode from 'jwt-decode';
import swal from 'sweetalert';
import { ALL_SUCCESS, ALL_FAILURE, ALL_START } from './action_type';
import { axiosCall } from '../../../services/httpservice';

export const allStart = (payload) => ({
    type: ALL_START,
});

export const successAll = (payload) => ({
    type: ALL_SUCCESS,
    payload,
});

export const allError = (payload) => ({
    type: ALL_FAILURE,
    payload,
});


export const allAction = () => async (dispatch) => {
    dispatch(allStart());
    try {
        let task = await localStorage.getItem('tasks_container');

        if (task !== null) {
            dispatch(successAll(JSON.parse(task)))
        } else {
            task = await localStorage.setItem('tasks_container', JSON.stringify([]))
            dispatch(successAll(JSON.parse(task)))
        }
        
    } catch (error) {
        swal({
            title: 'error fetching',
            text: `error`,
            icon: 'error',
            timer: 3000,
            buttons: false,
        });
        return dispatch(allError('error bro'));
    }
};
// export default {
//     loginAction,
// };
