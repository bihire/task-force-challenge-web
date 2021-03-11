import React, { Component, useState } from 'react';
import { IoClose, IoPencil } from "react-icons/io5";
import { doneAction } from '../../../../../../redux/action/setDoneTask/action'
import Button from '../../../../../../components/Button'
import IconButton from '../../../../../../components/iconBtn'
import SimpleDialog from '../../../../../../components/dialogue'

import './task_methods.scss'
import { connect } from 'react-redux';
const emails = ['username@gmail.com', 'user02@gmail.com'];

const TaskMethods = ({done,id, SetDone}) => {
    const [open, setOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(emails[1]);

    const handleClickOpen = () => {
        console.log('bro')
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };
    return (
        <div>
            <div className='TaskMethods'>
                <div className={done === false ? 'TaskMethods_edit' : 'TaskMethods_edit display_none'}>
                    <IconButton className="editBtn" value={<IoPencil className="editIcon" />} />
                </div>
                <div className='TaskMethods_delete'>
                    <IconButton className="closeBtn" value={<IoClose className="closeIcon" />} onClick={handleClickOpen} />
                </div>
                <div className={done === false ? 'TaskMethods_done' : 'TaskMethods_done display_none'}>
                    <Button className="doneBtn" value="DONE" onClick={() => SetDone(id)} />
                </div>
            </div>
            <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
        </div>
            

    )

}

// const mapStateToProps = function (state) {
//     return {
//         all: state.all,
//     }
// } 

const mapDispatchToProps = (dispatch) => ({
    SetDone: (data) => dispatch(doneAction(data)),
});

export default connect(null, mapDispatchToProps)(TaskMethods);