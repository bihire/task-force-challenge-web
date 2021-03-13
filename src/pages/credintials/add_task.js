import React, { useState, useEffect } from 'react';
import './form.scss'
import InputField from '../../components/InputField'
import Button from '../../components/Button'
import { addAction } from '../../redux/action/addTask/action'
import { connect } from 'react-redux';
import TextArea from '../../components/TextArea';
import NativeSelects from '../../components/customSelect';
import ImageUpload from '../../components/ImageUploader';

function AddTask({isEdit, AddTask, changeModal,  }) {
    const [title, setTitle] = useState('');
    const [titleError, setTitleError] = useState('');
    const [priority, setPriority] = useState('low');
    const [description, setDescription] = useState('');
    const [descriptionError, setDescriptionError] = useState('');
    const [isTitleValid, setIsTitleValid] = useState(false);
    const [isDescriptionValid, setIsDescriptionValid] = useState(false);

    
    const [curState, setThisState] = useState({
        file: null,
        url: null,
        error: ''
    });
    useEffect(() => {
        if(isEdit.edit) {
            const taskStr = localStorage.getItem('tasks_container');
            let tasks = JSON.parse(taskStr)
            const match = tasks.findIndex((i) => i.id === isEdit.id)
            setTitle(tasks[match].title)
            setDescription(tasks[match].description)
            setPriority(tasks[match].priority)
            setThisState({
                file: null,
                url: tasks[match].url,
                error: ''
            })

            // tasks.splice(match, 1)
            // await localStorage.setItem('tasks_container', JSON.stringify(tasks));
            // dispatch(successdelete)
            // dispatch(updateAll(tasks))
        }
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        if (name === 'description') {
            const regex = new RegExp(value.replace(/(^\ *)/gi, '').replace(/ +/gi, " "), "gi");
            if (regex.source.length >= 0 && regex.source.length <= 240) {
                const newValue = regex.source === '(?:)' ? '' : regex.source
                setDescription(newValue)
                setIsDescriptionValid(newValue === ''? false :true)
            }
        }
        if (name === 'title') {
            const regex =  new RegExp(value.replace(/(^\ *)/gi, '').replace(/ +/gi, " "), "gi");
            if (regex.source.length >= 0 && regex.source.length <=140) {
                const newValue = regex.source === '(?:)' ? '' : regex.source
                setTitle(newValue)
                setIsTitleValid(newValue === '' ? false : true)

            }
            
        }
        
    }

    // const resetInput = (e) => {
    //     if (e.target.id === 'email') {
    //         setEmailError('');
    //         setIsTitleValid(false);
    //     }
    //     if (e.target.id === 'password') {
    //         setPasswordError('');
    //         setIsPasswordValid(false);
    //     }
    // }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isTitleValid) setTitleError('Title is required')
        if (isTitleValid) setTitleError('')
        if (!isDescriptionValid) setDescriptionError('Description is required')
        if (isDescriptionValid) setDescriptionError('')
        if (!curState.url) setTheState({error: 'image is required', file: null, url: null})
        if (curState.url !== null) setThisState({ error: '', file: curState.file, url: curState.url})
        if (isDescriptionValid && isTitleValid && curState.url)  {
            AddTask({ title, description, priority, url: curState.url });
            changeModal();
        }
    }

    const setTheState = ({ file, url, error }) => {
        
        setThisState({
            url: url,
            file: file,
            error: error ? error : curState.error,
        })
        
    }
    return (
        <div class="add_task">
            <div class="add_task_card">
                <div className='add_task_card_title'>
                    New Task
                </div>
                <div className='add_task_card_image'>
                    <div className='add_task_card_image_title'>
                        Add image
                    </div>
                    <div className='add_task_card_ImageBox'>
                        <ImageUpload
                            setState={setTheState}
                            url={curState.url}
                            file={curState.file}
                            error={curState.error}
                        />
                    </div>
                </div>
                
                <div className='add_task_card_image'>
                    <div className='add_task_card_image_title'>
                        Title
                    </div>
                    <div className='add_task_card_taskTitle'>
                        <InputField
                            type="title"
                            name="title"
                            id="title"
                            placeholder="task_title(140 characters)"
                            value={title}
                            error={titleError}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className='add_task_card_image'>
                    <div className='add_task_card_image_title'>
                        Description
                    </div>
                    <div className='add_task_card_taskDescription'>
                        <TextArea
                            type="description"
                            name="description"
                            id="description"
                            placeholder="240 characters"
                            value={description}
                            error={descriptionError}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className='add_task_card_image'>
                    <div className='add_task_card_image_title'>
                        Priority
                    </div>
                    <div className='add_task_card_task_select'>
                        <NativeSelects curPriority={priority} setPriority={setPriority} />
                    </div>
                </div>
                <div className='add_task_card_image_submit'>
                    <Button className='createTaskBtn' onClick={handleSubmit} value='CREATE TASK' />
                </div>
                

            </div>


        </div>



    );
}



const mapDispatchToProps = (dispatch) => ({
    AddTask: (data) => dispatch(addAction(data)),
});

export default connect(null, mapDispatchToProps)(AddTask);