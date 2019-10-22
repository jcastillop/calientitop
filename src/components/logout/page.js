import React from 'react'; 
import "./styles.css";

const Page = ({handleLogout}) => (
    <div id="app-logout">
        <p>Estado de session Verdadero</p>
        <button onClick={handleLogout}>
        Cerrar sesion
        </button>
    </div>
)

export default Page