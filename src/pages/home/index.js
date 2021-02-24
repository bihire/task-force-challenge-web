import React, { useState, useEffect} from 'react'
import StoryCard from './components/story_card'
import HeaderPic from '../../assets/header.svg'
import Modal from '../../components/modal';
import Register from '../credintials/add_user';
import { allAction } from '../../redux/action/allUsers/action'

import './home.scss'
import { connect } from 'react-redux';
import LandingLayout from '../../components/landingLayout';

function LandingPage (props) {
        // var subtitle;
        // const [modalIsOpen, setIsOpen] = useState(false);
        
        useEffect(() => {
            // props.fecthUsers();
        }, [])
        // function changeModal() {
        //     setIsOpen(!modalIsOpen);
        // }

    return LandingLayout(
            <div className="MainEntry">
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