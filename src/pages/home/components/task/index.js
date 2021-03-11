import React, { Component } from 'react'
import userData from './usersArray.json'

import rightDateFormat from './rightDateFormat';

import './task.scss'
import TaskMethods from './components/taskMethods';
import Category from './components/category';
import { connect } from 'react-redux';

const Task = ({all},task) => {
    
    return (
        
            <div className='Task'>
                
            <div id='table-container'>
                <div id='resp-table'>
                    
                    <div id='resp-table-body'>
                        {all.map((row, index) => (
                            <div className={!row.done ? 'resp-table-row' : 'resp-table-row dim-row-opacity'} key={index}>
                                <div className='table-body-cell' id='from'>{index+1}</div>
                                <div className='table-body-cell' id='title'>{row.description}</div>
                                <div className='table-body-cell' id='bro-fg'><Category value={row.priority} done={row.done}/></div>
                                
                                <div className='table-body-cell' id='to'>Create {row.created_at}</div>
                                <div className='table-body-cell' id='to'>Modified {row.updated_at}</div>
                                <div className='table-body-cell' id='date'><TaskMethods done={row.done} id={row.id} /></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    )

}
// const mapStateToProps = function (state) {
//     return {
//         all: state.all,
//     }
// } 

// const mapDispatchToProps = (dispatch) => ({
//     FetchTasks: (data) => dispatch(allAction(data)),
// });

export default Task ;