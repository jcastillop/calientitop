import React, { useState } from 'react';
import Page from './page';
import useSignUpForm from '../hooks/useForm';
import { withRouter } from 'react-router-dom';
import Logout from '../../components/logout/index';
import history from '../../components/utils/history';

function Login(){

    const [logOn, setLogOn] = useState(false);

    const signup = () => {
        setLogOn(true)
        localStorage.setItem('token', '12345678')
        history.push("/principal")
    }   

    const logout = () => {
        localStorage.clear()
        setLogOn(false)
        history.push("/")
    }
    const {name, password, handleInputChange, handleSubmit} = useSignUpForm(signup);

    if(logOn || localStorage.getItem('token')){

        return (
                <Logout logout = { logout }/>
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
