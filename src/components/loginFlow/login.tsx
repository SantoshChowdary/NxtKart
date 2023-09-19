import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
// import FirebaseLogin from './firebase'
import Cookies from "js-cookie"

import './index.css'

interface LoginFormState {
    username : string;
    password : string;
}

type Options = {
    method : string,
    body: string
}

const Login = (props: any) => {

    const [formData, setFormData] = useState<LoginFormState>({
        username : '',
        password : ''
    })

    const [errorMsg, setErrorMsg] = useState<string>("")

    const history = useHistory()

    const onChangeUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setFormData({...formData, [name]:value});
        setErrorMsg("")
    }

    const onSubmitSuccess = (jwtToken: string) => {
        Cookies.set("jwt_token", jwtToken, {expires: 10, path: '/'})
        console.log("success")
        history.replace("/")
    }

    const onSubmitFailure = (errorMsg:string) => {
        setErrorMsg(errorMsg)
      };

    const onSubmitLoginForm = async (e:React.FormEvent) => {
        e.preventDefault()
        setErrorMsg("")

        const url:string = "https://apis.ccbp.in/login"
        const options:Options = {
            method : 'POST',
            body : JSON.stringify(formData)
        }
        const response = await fetch(url, options)
        const responseData = await response.json()
        console.log(responseData)

        if (response.ok === true) {
            onSubmitSuccess(responseData.jwt_token);
          } else {
            onSubmitFailure(responseData.error_msg);
          }
    }    

    return (
        <div className="login-container">
            <div className="login-sub-container-1">
                <h1 className="login-heading">Login</h1>
                <form className='login-form' onSubmit={onSubmitLoginForm}>
                    <input 
                        type="text" 
                        placeholder='Email / Username'
                        name="username" 
                        className='login-input'
                        autoComplete='off'
                        onChange={onChangeUserInput}
                        value={formData.username}
                    />
                    <input 
                        type="password" 
                        name="password"
                        placeholder='Password' 
                        className='login-input'
                        onChange={onChangeUserInput}
                        value={formData.password}
                    />
                    <p className='forgot-your-password' role='button' onClick={()=>alert("Yet to implement")}>Forgot your password?</p>
                    <button type='submit' className='login-button'>Log in</button>
                    <p className="error-msg"> {errorMsg} </p>
                </form>
                <p className="continue-other-p">or continue with</p>    
                {/* <FirebaseLogin /> */}
            </div>
            <p className='sign-up-section'>Don't have an account? <button className="span-sign-up">Sign Up</button></p>
        </div>
    )

}

export default Login

