// import jwtDecode from 'jwt-decode';
import swal from 'sweetalert';
import { DELETE_SUCCESS, DELETE_FAILURE, DELETE_START } from './action_type';
import { UPDATE_SUCCESS } from '../allTasks/action_type';
// import { axiosCall } from '../../../services/httpservice';

export const deleteStart = (payload) => ({
    type: DELETE_START,
    payload
});

export const successdelete = (payload) => ({
    type: DELETE_SUCCESS,
    payload,
});

export const updateAll = (payload) => ({
    type: UPDATE_SUCCESS,
    payload,
});


export const deleteError = (payload) => ({
    type: DELETE_FAILURE,
    payload,
});


export const deleteAction = (data) => async (dispatch) => {
    dispatch(deleteStart(data));
    try {
        
        const taskStr = await localStorage.getItem('tasks_container');
        let tasks = await JSON.parse(taskStr)
        const match = await tasks.findIndex((i)=>i.id === data)
        
        tasks.splice(match, 1)
        await localStorage.setItem('tasks_container', JSON.stringify(tasks));
        dispatch(successdelete)
        dispatch(updateAll(tasks))
    } catch (error) {
        swal({
            title: 'error DELETEing user',
            text: `${error.response.data.message}`,
            icon: 'error',
            timer: 3000,
            buttons: false,
        });
        return dispatch(deleteError(error.response.data));
    }
};
