// import jwtDecode from 'jwt-decode';
import swal from 'sweetalert';
import { ADD_SUCCESS, ADD_FAILURE, ADD_START } from './action_type';
import { ALL_SUCCESS } from '../allTasks/action_type';
// import { axiosCall } from '../../../services/httpservice';

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
        const task = await localStorage.getItem('tasks_container');
        const date = new Date()
        if (task === null) {
            await localStorage.setItem('tasks_container', JSON.stringify([{ id: 1, ...data, created_at: date, updated_at: date, done: false}]));
        } else {
            const tasks = JSON.parse(task);
            await localStorage.setItem('tasks_container', JSON.stringify([{ id: tasks.length + 1, ...data, created_at: date, updated_at: date, done: false }, ...tasks]))
        }
         
            
        console.log(await localStorage.getItem('tasks_container'))
        // localStorage.setItem('tasks', )
        // const { token } = response.data.data;
        // const decoded = jwtDecode(token);

        // delete data.password
        // delete data.confirm_password
        // data.id = decoded.id
        // dispatch(successAll([data]))
        // swal({
        //     title: 'Success',
        //     text: `just added ${data.firstName}`,
        //     icon: 'success',
        //     timer: 3000,
        //     buttons: false,
        // });
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
