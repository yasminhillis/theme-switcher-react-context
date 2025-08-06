import { ThemeContext } from "../App"
import { useContext } from 'react';

export default function Main(){
    const {theme, toggleTheme} = useContext(ThemeContext);
    return (
        <button onClick={toggleTheme} className={`${theme}-theme`}>Switch Theme</button>
    )
}