import React, { Component } from 'react'
import Task from '../task'

import './with_tasks.scss'

const WithTasks = ({all}) => {
    return (
        <div>
            <div className='WithTasks'>
                <div className='WithTasks_title'>
                   {all.length} Tasks
                </div>
                <div className='WithTasks_content'>
                    <Task all={all}/>
                </div>
            </div>
        </div>

    )

}

export default WithTasks;