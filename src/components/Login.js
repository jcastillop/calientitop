import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

class Login extends Component {
    state = {
        usuario : '',
        password: '',
        loggedin: false
    }

    onSubmit = (e) => {
        e.preventDefault()
        const {usuario, password} = this.state
        this.state.loggedin = true
        this.props.history.push('/principal')
        //console.log(this.state)
        /*
        if(usuario == 'Jorge' && password == '123456'){
            console.log('usuario logueado')
        }
        */
    }
    onChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render() {
       if(this.state.loggedin){
           return(
               <h1>Usuario logueado</h1>
           )
       }else{
            return (
                <form onSubmit={this.onSubmit}>
                    <input type="text" name="usuario" placeholder="usuario" onChange={this.onChange} value={this.state.usuario}/>
                    <br/>
                    <input type="password" name="password" placeholder="password" onChange={this.onChange} value={this.state.password}/>
                    <br/>
                    <button type="submit">Guardar</button>
                </form>
            )
        }
    }
}

export default withRouter(Login)
