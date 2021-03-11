// import jwtDecode from 'jwt-decode';
import swal from 'sweetalert';
import { DONE_SUCCESS, DONE_FAILURE, DONE_START } from './action_type';
import { UPDATE_SUCCESS } from '../allTasks/action_type';
// import { axiosCall } from '../../../services/httpservice';

export const doneStart = (payload) => ({
    type: DONE_START,
    payload
});

export const successdone = (payload) => ({
    type: DONE_SUCCESS,
    payload,
});

export const updateAll = (payload) => ({
    type: UPDATE_SUCCESS,
    payload,
});


export const doneError = (payload) => ({
    type: DONE_FAILURE,
    payload,
});


export const doneAction = (data) => async (dispatch) => {
    dispatch(doneStart(data));
    try {
        const taskStr = await localStorage.getItem('tasks_container');
        let tasks = await JSON.parse(taskStr)
        const match = await tasks.findIndex((i)=>i.id === data)
        tasks[match].done = true
        await localStorage.setItem('tasks_container', JSON.stringify(tasks));
        dispatch(successdone)
        dispatch(updateAll(tasks))
    } catch (error) {
        swal({
            title: 'error doneing user',
            text: `${error.response.data.message}`,
            icon: 'error',
            timer: 3000,
            buttons: false,
        });
        return dispatch(doneError(error.response.data));
    }
};
