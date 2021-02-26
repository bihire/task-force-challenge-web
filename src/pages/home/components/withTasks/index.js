import React, { Component } from 'react'
import Task from '../task'

import './with_tasks.scss'

const WithTasks = (user) => {
    return (
        <div>
            <div className='WithTasks'>
                <div className='WithTasks_title'>
                    24 Tasks
                </div>
                <div className='WithTasks_content'>
                    <Task />
                </div>
            </div>
        </div>

    )

}

export default WithTasks;