import React, { Component } from 'react';
import { IoClose, IoPencil } from "react-icons/io5";
import { Close, Edit} from "@material-ui/icons"
import Button from '../../../../../../components/Button'
import IconButton from '../../../../../../components/iconBtn'

import './task_methods.scss'

const TaskMethods = (user) => {
    return (
            <div className='TaskMethods'>
                <div className='TaskMethods_edit'>
                    <IconButton className="editBtn" value={<IoPencil className="editIcon" />} /> 
                </div>
                <div className='TaskMethods_delete'>
                    <IconButton className="closeBtn" value={<IoClose className="closeIcon" />} /> 
                </div>
                <div className='TaskMethods_done'>
                    <Button className="doneBtn" value="DONE" />
                </div>
            </div>

    )

}

export default TaskMethods;