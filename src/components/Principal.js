import React from "react";

function Principal(){

    if(localStorage.getItem('token')){
        return (<h1>Usuario</h1>)
    }else{
        return(null)
    }
    
}
  
export default Principal;