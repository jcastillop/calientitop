import React from 'react'
import { slide as Menu } from "react-burger-menu"
import "./styles.css";

const Page = props => (
  <Menu outerContainerId={ "app-body" } >
    {props.items.map(item => (
      <a key={item.key} className="menu-item" href={item.nombre}>
        {item.nombre}
      </a>
    ))}
  </Menu>
)


export default Page