import React, { useState, useEffect} from 'react'
import TaskCard from './components/task_card'
import Empty from './components/empty'
import AddTask from '../credintials/add_task';
import { allAction } from '../../redux/action/allTasks/action'

import { connect } from 'react-redux';
import LandingLayout from '../../components/landingLayout';
import Header from './components/header';
import WithTasks from './components/withTasks';

import './landing_page.scss'

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        outline: 'none',
        border: 'none',
    },
    paper: {
        // backgroundColor: theme.palette.background.paper,
        outline: 'none',
        border: 'none',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

function LandingPage (props: any) {
        useEffect(() => {
            props.FetchTasks();
        }, [])

    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [isEdit, setIsEdit] = useState({edit: false, id: null});

    const handleOpen = () => {
        setOpen(true);
    };

    const handleOpenEdit = (value: any) => {
        setOpen(true);
        setIsEdit({edit: true, id: value});
    };

    const handleClose = () => {
        setOpen(false);
        setIsEdit({ edit: false, id: null });
    };
    return LandingLayout(
            <div className="landing_page">
            <div className="landing_page_header">
                <Header changeModal={handleOpen}/>
            </div>
            <div className="landing_page_container">
                <div className="landing_page_container_cards">
                    <TaskCard />
                    <TaskCard />
                    <TaskCard />
                    <TaskCard />
                    <TaskCard />
                </div>
                <div className="landing_page_container_content">
                    {(props.all.all === null || props.all.all.length === 0) ? <Empty /> : <WithTasks handleOpenEdit={handleOpenEdit} all={props.all.all}/>}
                </div>
            </div>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className="modal-main-content">
                        <AddTask isEdit={isEdit} changeModal={handleClose} />
                    </div>
                </Fade>
            </Modal>
            </div>
        )
    
}
const mapStateToProps = function(state: any) {
    return {
        all: state.all,
    }
}

const mapDispatchToProps = (dispatch: any) => ({
    FetchTasks: () => dispatch(allAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);;