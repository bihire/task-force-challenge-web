import React, { Component } from 'react'
import Task from '../task'

import './with_tasks.scss'

const WithTasks = ({handleOpenEdit, all}) => {
    return (
        <div>
            <div className='WithTasks'>
                <div className='WithTasks_title'>
                   {all.length} Tasks
                </div>
                <div className='WithTasks_content'>
                    <Task handleOpenEdit={handleOpenEdit} all={all}/>
                </div>
            </div>
        </div>

    )

}

export default WithTasks;