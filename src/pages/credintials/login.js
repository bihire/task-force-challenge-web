// import logo from './logo.svg';
import React, { useState } from 'react';
import { connect } from 'react-redux'
import '../../App.css';
import img from '../../assets/login.svg';
import { FaChevronRight } from 'react-icons/fa'
import InputField from '../../components/InputField'
import Button from '../../components/Button'
// import history from '../../utils/history';
import { loginAction } from '../../redux/action/auth/action'


function Login(props) {

    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        if(name === 'email') {
            setEmail(value)
        }
        if (name === 'password') {
            setPassword(value)
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
        // console.log({ email, password})
       if(isEmailValid && isPasswordValid) {
           await props.signinUser({
               email,
               password,
           });
           console.log(props.user.user.email);
       }
    }

    return (
        <div class="container">

            <div class="card">

                <div class="card-form signin-card-form">
                    
                    <div class="welcome-info">
                        <p class="welcome">Login</p>
                        <img src={img} alt="welcome image" height="100" />
                    </div>

                    <div class="slide signIn">
                        <div class="fields signInInputs">
                            <InputField
                                type="email" 
                                name="email"
                                id="email"
                                placeholder="email"
                                value={email}
                                error= {emailError}
                                onChange={handleChange}
                                onKeyUp={checkEmailInput}
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
                        </div>
                        <p class="forget">Let's get you stated</p>
                        
                        <Button value='Sign in' onClick={handleSubmit} icon={<FaChevronRight class="submit_icon" />}/>

                    </div>


                </div>

            </div>


        </div>



    );
};
const mapStateToProps = function (state) {
    return {
        user: state.user,
    }
}

const mapDispatchToProps = (dispatch) => ({
    signinUser: (data) => dispatch(loginAction(data)),
});
    

export default connect(mapStateToProps, mapDispatchToProps)(Login);