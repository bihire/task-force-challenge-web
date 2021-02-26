import React, { useState, useEffect, useRef} from 'react'
import TaskCard from './components/task_card'
// import Empty from './components/empty'
import Modal from '../../components/modal';
import AddTask from '../credintials/add_task';
import { allAction } from '../../redux/action/allUsers/action'

import './landing_page.scss'
import { connect } from 'react-redux';
import LandingLayout from '../../components/landingLayout';
import Header from './components/header';
import WithTasks from './components/withTasks';

function LandingPage (props) {
        // var subtitle;
        const [modalIsOpen, setIsOpen] = useState(false);
    const parentRef = useRef<HTMLDivElement>();
        useEffect(() => {
            // props.fecthUsers();
        }, [])
        function openModal() {
            setIsOpen(true)
            
        }

    function closeModal(e) {

        if (parentRef.current.id === e.target.id) {
            setIsOpen(!modalIsOpen);
            
        } else {
            return;
        }

    }

    return LandingLayout(
            <div className="landing_page">
            <div className="landing_page_header">
                <Header changeModal={openModal}/>
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
                    <WithTasks />
                </div>
            </div>
                {/* <div className="MainEntry">

                    <div className="MainEntry_header_image">
                        <img src={HeaderPic} alter="header pic" height="200" width="200"  repeat/>

                    </div>
                    <div className="MainEntry_container">
                        <p className="MainEntry_container_title">Available users</p>
                        <div className="MainEntry_container_story_Container">
                            {props.all.all.map((index, idx) => {
                                return <StoryCard user={props.all.all[idx]}/>
                            })}
                            

                        </div>
                    </div>
                </div>
                <Modal show={modalIsOpen} handleClose={changeModal}>
                    <Register changeModal={changeModal}/>
                </Modal>
                <a href="#" class="float" onClick={changeModal}>
                    <div className="float_div">
                        <div className='float_div_container'>
                            <span className={modalIsOpen ? 'float_div_container_icon float_div_container_icon_close' : 'float_div_container_icon'}></span>
                            
                        </div>
                    </div>
                </a> */}
            <Modal parentRef={parentRef} show={modalIsOpen} handleClose={closeModal}>
                <AddTask changeModal={closeModal} />
            </Modal>
            </div>
        )
    
}
const mapStateToProps = function (state) {
    return {
        all: state.all,
    }
}

const mapDispatchToProps = (dispatch) => ({
    fecthUsers: (data) => dispatch(allAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);;