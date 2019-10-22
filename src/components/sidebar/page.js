import React from 'react'
import { slide as Menu } from "react-burger-menu"
import "./styles.css";

const Page = props => (
  <Menu>
    {props.items.map(item => (
      <a key={item.key} className="menu-item" href="/">
        {item.nombre}
      </a>
    ))}
  </Menu>
)


export default Page