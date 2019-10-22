import React from "react";
import SideBar from "../sidebar/index"
import Logout from "../logout/index"
import "./styles.css";

function Principal(){

    if(localStorage.getItem('token')){
        return (
            <div id="app-body">
                <SideBar />
                <div id="page-wrap">
                    <h1>Cool Restaurant 🍔🍕</h1>
                    <h2>Check out our offerings in the sidebar!</h2>
                </div>
            </div>
        )
    }else{
        return(null)
    }
    
}
  
export default Principal;