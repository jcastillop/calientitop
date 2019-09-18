import React, { useState } from 'react';
import Page from './page';
import useSignUpForm from '../hooks/useForm';
import { withRouter } from 'react-router-dom';

function Login(){

    const [count, setCount] = useState(false);

    const signup = (values) => {
        console.log(values)
        setCount(true)
        localStorage.setItem('token', '12345678')
    }

    const logout = () => {
        localStorage.clear()
        setCount(false)
    }

    const {name, password, handleInputChange, handleSubmit} = useSignUpForm(signup);

    if(count){
        return (
            <div>
              <p>Estado de session {count} Verdadero</p>
              <button onClick={logout}>
                Cerrar sesion
              </button>
            </div>
          );
    }else{
        return(
            <Page
            name = {name}
            password = {password}
            handleInputChange = {handleInputChange}
            handleSubmit = {handleSubmit}
            />
        )
    }

}

export default withRouter(Login)
