import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import { blue } from '@material-ui/core/colors';

import './dialogue.scss'
import Button from '../Button';

const emails = ['username@gmail.com', 'user02@gmail.com'];
const useStyles = makeStyles({
    avatar: {
        backgroundColor: blue[100],
        color: blue[600],
    },
});

export default function SimpleDialog(props) {
    const classes = useStyles();
    const { onClose, handleAction, open } = props;

    const handleClose = () => {
        onClose();
    };

    // const handleAction = (value) => {
    //     handleAction(value);
    // };

    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
            <div className="dialogue_container" >
                <div className="dialogue_container_title">Are you sure?</div>
                <div className="dialogue_container_description">If you delete this task you wont be able to reverse this action</div>
                <div className="dialogue_container_methods">
                    <div className="dialogue_container_methods_delete">
                        <Button onClick={handleAction} className="dialogue_container_methods_delete_button" value="DELETE TASK"></Button>
                    </div>
                    <div className="dialogue_container_methods_cancel">
                        <div onClick={handleClose} className="dialogue_container_methods_cancel_button">
                            cancel
                        </div>
                    </div>
                </div>
            </div>
            
        </Dialog>
    );
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};
