// import jwtDecode from 'jwt-decode';
import swal from 'sweetalert';
import { ADD_SUCCESS, ADD_FAILURE, ADD_START } from './action_type';
import { ALL_SUCCESS } from '../allTasks/action_type';
import { UPDATE_SUCCESS } from '../allTasks/action_type';
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

export const updateAll = (payload) => ({
    type: UPDATE_SUCCESS,
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
            const tasks = JSON.parse([{ id: 1, ...data, created_at: `${date.getDate()} ${date.getMonth()} ${date.getFullYear()}`, updated_at: `${date.getDate()} ${date.getMonth()} ${date.getFullYear()}`, done: false }]);
            await localStorage.setItem('tasks_container', JSON.stringify());
            dispatch(updateAll(tasks))
        } else {
            const tasks = JSON.parse(task);
            const newTasks = [{ id: tasks.length > 0 ? tasks[0].id + 1 : 1, ...data , created_at: `${date.getDate()} ${date.getMonth()} ${date.getFullYear()}`, updated_at: `${date.getDate()} ${date.getMonth()} ${date.getFullYear()}`, done: false }, ...tasks];
            await localStorage.setItem('tasks_container', JSON.stringify(newTasks))
            dispatch(updateAll(newTasks))
        }
         
            
        // console.log(await localStorage.getItem('tasks_container'))
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
            text: `${error}`,
            icon: 'error',
            timer: 3000,
            buttons: false,
        });
        return dispatch(addError(error));
    }
};
