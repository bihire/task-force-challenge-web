import React, { Component } from 'react'
import userData from './usersArray.json'
import rightDateFormat from './rightDateFormat';

import './task.scss'
import TaskMethods from './components/taskMethods';
import Category from './components/category';

const Task = (task) => {
    return (
        
            <div className='Task'>
                
            <div id='table-container'>
                <div id='resp-table'>
                    
                    <div id='resp-table-body'>
                        {userData.map((row, index) => (
                            <div className='resp-table-row' key={index}>
                                <div className='table-body-cell' id='from'>{index+1}</div>
                                <div className='table-body-cell' id='title'>{row.subject}</div>
                                <div className='table-body-cell' id='bro-fg'><Category value="medium" /></div>
                                
                                <div className='table-body-cell' id='to'>Create 14 Feb 2021</div>
                                <div className='table-body-cell' id='to'>Modified 14 Feb 2021</div>
                                <div className='table-body-cell' id='date'><TaskMethods /></div>
                            </div>
                        ))}
                    </div>
                    


                </div>

            </div>
                
        </div>

    )

}

export default Task;