import React, { useContext } from "react";
import encendido from '../../public/lightswitch-on.png';
import apagado from '../../public/lightswitch-off.png';
import { ThemeContext } from "../context/ThemeContext";
import '../styles/components/Switch.css'

function SwitchComponent() {
    const { darkMode, toggleDarkMode } = useContext(ThemeContext);
    const handleClick = () => {
        toggleDarkMode();
    }
    return (
        <div className="interruptor">
            <img
            src={darkMode ? apagado : encendido}
             alt="Interruptor"
             onClick={handleClick}>
                </img>
            <h2 className={darkMode ? 'darkH2' : 'lightH2'}>{darkMode ? 'Apaga' : 'Enciende'} el interruptor para 
            {darkMode ? ' Modo Claro 💡' : ' modo Oscuro 🔦'}</h2>
        </div>
    )
}

export default SwitchComponent;