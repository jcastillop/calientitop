import React, { useState }  from 'react'
import Page from "./page"
import menu from "../../data/menu"


function SideBar(){

    const [items, SetItem] = useState(menu)

    return(
        <Page items={items}/>
    )
}

export default SideBar