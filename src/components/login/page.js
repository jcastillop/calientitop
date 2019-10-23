import React from 'react';
import InputForm from '../inputForm/index';
import "./styles.css";
import { Button } from 'react-bootstrap';

const Page = ({ name, password, handleInputChange, handleSubmit }) => (
    <div>
        <h1>Login</h1>
        <form onSubmit = { handleSubmit }>
            <div className ="form-group">
                <InputForm
                label="Name"
                type="text"
                name="name"
                value = { name }
                onChange = { handleInputChange }
                />
            </div>
            <div className ="form-group">
                <InputForm
                label="Password"
                type="password"
                name="password"
                value = { password }
                onChange = { handleInputChange }
                />
            </div>                
            <Button className="btn btn-default" variant="primary" id="btn-login" type="submit" value="Submit">Login</Button>
        </form>
    </div>
)
    

export default Page
