import React, { useState } from 'react';
import Page from './page';
import useSignUpForm from '../hooks/useForm';
import { withRouter } from 'react-router-dom';
import Logout from '../../components/logout/index';
import history from '../../components/utils/history';
import SideBar from "../sidebar/index"

function Login(){

    const [logOn, setLogOn] = useState(false);

    const signup = () => {
        setLogOn(true)
        localStorage.setItem('token', '12345678')
        history.push("/Principal")
    }   

    const logout = () => {
        localStorage.clear()
        setLogOn(false)
        history.push("/")
    }
    const {name, password, handleInputChange, handleSubmit} = useSignUpForm(signup);

    if(logOn || localStorage.getItem('token')){

        return (
            <div id="app-body">
                <SideBar />
                <Logout logout = { logout }/>
            </div>
                
          );
          
    }else{

        return(
            <Page
            name = { name }
            password = { password }
            handleInputChange = { handleInputChange }
            handleSubmit = { handleSubmit }
            />
        )
    }

}

export default withRouter(Login)
