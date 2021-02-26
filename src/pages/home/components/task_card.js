import React, { Component } from 'react'

import './task_card.scss'

const TaskCard = (user) => {
    return (
        <div>
            <div className='TaskCard'>
                <div className='TaskCard_count'>
                    24
                </div>
                <div className='TaskCard_label'>
                    Total Tasks
                </div>
            </div>
        </div>
        
    )

}

export default TaskCard;