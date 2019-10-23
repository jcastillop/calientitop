import React from 'react'
import SideBar from "../sidebar/index"
import Page from './page'

function Articulos(){

    if(localStorage.getItem('token')){
        return (
                    <Page />
        )
    }else{
        return null
    }
    
}

export default Articulos