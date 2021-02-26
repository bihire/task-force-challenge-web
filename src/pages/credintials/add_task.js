// import logo from './logo.svg';
import React, { useState } from 'react';
import './form.scss'
import InputField from '../../components/InputField'
import Button from '../../components/Button'
import {FaChevronRight } from 'react-icons/fa'
import { addAction } from '../../redux/action/addUser/action'
import { connect } from 'react-redux';
import TextArea from '../../components/TextArea';
import NativeSelects from '../../components/customSelect';

function AddTask(props) {
    const [email, setEmail] = useState('');
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [phone_number, setPhoneNumber] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [password, setPassword] = useState('');
    const [confirm_password, setConfirmPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'email') {
            setEmail(value)
        }
        if (name === 'password') {
            setPassword(value)
        }
        if (name === 'first_name') {
            setFirstName(value)
        }
        if (name === 'last_name') {
            setLastName(value)
        }
        if (name === 'phone_number') {
            setPhoneNumber(value)
        }
        if (name === 'confirm_password') {
            setConfirmPassword(value)
        }
    }

    const checkEmailInput = (e) => {
        const validEmailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!validEmailRegex.test(e.target.value)) {
            setEmailError('Email is invalid');
            setIsEmailValid(false);
            console.log(emailError)
        } else {
            setEmailError('');
            setIsEmailValid(true);
        }
    }

    const checkPasswordInput = (e) => {
        const validPasswordRegex = /^(?=.*[a-z])(?=.*\d)[a-zA-Z\d]{8,64}$/;
        if (!validPasswordRegex.test(e.target.value)) {
            setPasswordError('Should be alphanumeric and between  8 to 64 characters');
            setIsPasswordValid(false);
            console.log(passwordError)
        } else {
            setPasswordError('');
            setIsPasswordValid(true);
        }
    }

    const resetInput = (e) => {
        if (e.target.id === 'email') {
            setEmailError('');
            setIsEmailValid(false);
        }
        if (e.target.id === 'password') {
            setPasswordError('');
            setIsPasswordValid(false);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log({ isEmailValid, isPasswordValid})
        if (isEmailValid && isPasswordValid) {
            await props.addUser({
                email,
                password,
                first_name,
                last_name,
                phone_number,
                confirm_password

            });
            if (!props.all.loading && props.all.error === null) {
                // setEmail('')
                // setPassword('')
                props.changeModal();
            }
        }
    }
    return (
        <div class="add_task">
            <div class="add_task_card">
                <div className='add_task_card_title'>
                    New Task
                </div>
                <div className='add_task_card_image'>
                    <div className='add_task_card_image_title'>
                        Add image
                    </div>
                    <div className='add_task_card_image_box'>
                        <div className='add_task_card_image_box_message'>
                            Tap to add an image
                        </div>
                    </div>
                </div>
                <div className='add_task_card_image'>
                    <div className='add_task_card_image_title'>
                        Title
                    </div>
                    <div className='add_task_card_task_title'>
                        <InputField
                            type="task_title"
                            name="task_title"
                            id="task_title"
                            placeholder="task_title(140 characters)"
                            // value={email}
                            // error={emailError}
                            // onChange={handleChange}
                            // onKeyUp={checkEmailInput}
                            // onFocus={resetInput}
                        />
                    </div>
                </div>
                <div className='add_task_card_image'>
                    <div className='add_task_card_image_title'>
                        Description
                    </div>
                    <div className='add_task_card_taskTitle'>
                        <TextArea
                            type="description"
                            name="description"
                            id="description"
                            placeholder="240 characters"
                        // value={email}
                        // error={emailError}
                        // onChange={handleChange}
                        // onKeyUp={checkEmailInput}
                        // onFocus={resetInput}
                        />
                    </div>
                </div>
                <div className='add_task_card_image'>
                    <div className='add_task_card_image_title'>
                        Description
                    </div>
                    <div className='add_task_card_task_select'>
                        <NativeSelects />
                    </div>
                </div>
                <div className='add_task_card_image_submit'>
                    <Button className='createTaskBtn' value='CREATE TASK' />
                </div>
                {/* <div class="card-form">
                    <div class="welcome-info">
                        
                    </div> */}

                    {/* <div class="slide signIn">
                        <div class="fields signInInputs">
                            <InputField
                                type="email"
                                name="email"
                                id="email"
                                placeholder="email"
                                value={email}
                                error={emailError}
                                onChange={handleChange}
                                onKeyUp={checkEmailInput}
                                onFocus={resetInput}
                            />
                            <InputField
                                type="first_name"
                                name="first_name"
                                id="first_name"
                                placeholder="first_name"
                                value={first_name}
                                // error={emailError}
                                onChange={handleChange}
                                // onKeyUp={checkEmailInput}
                                onFocus={resetInput}
                            />
                            <InputField
                                type="last_name"
                                name="last_name"
                                id="last_name"
                                placeholder="last_name"
                                value={last_name}
                                // error={emailError}
                                onChange={handleChange}
                                // onKeyUp={checkEmailInput}
                                onFocus={resetInput}
                            />
                            <InputField
                                type="phone_number"
                                name="phone_number"
                                id="phone_number"
                                placeholder="phone_number"
                                value={phone_number}
                                // error={emailError}
                                onChange={handleChange}
                                // onKeyUp={checkEmailInput}
                                onFocus={resetInput}
                            />
                            <InputField
                                type="password"
                                name="password"
                                id="password"
                                placeholder="password"
                                value={password}
                                error={passwordError}
                                onChange={handleChange}
                                onKeyUp={checkPasswordInput}
                                onFocus={resetInput}
                            />
                            <InputField
                                type="password"
                                name="confirm_password"
                                id="confirm_password"
                                placeholder="Confirm Password"
                                value={confirm_password}
                                // error={confirm_passwordError}
                                onChange={handleChange}
                                // onKeyUp={checkPasswordInput}
                                onFocus={resetInput}
                            />
                            
                        </div>
                        
                        <Button value='Add now' onClick={handleSubmit} icon={<FaChevronRight class="submit_icon" />} />

                    </div>


                </div> */}

            </div>


        </div>



    );
}

const mapStateToProps = function (state) {
    return {
        all: state.all,
    }
}

const mapDispatchToProps = (dispatch) => ({
    addUser: (data) => dispatch(addAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);