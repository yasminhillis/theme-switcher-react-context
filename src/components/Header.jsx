
import { ThemeContext } from "../App"
import { useContext } from "react"
export default function Header(){
    const { theme } = useContext(ThemeContext)
    return (
        <header className={`${theme}-theme`}>
            <h1>{theme === 'light' ? 'Light' : 'Dark'} Theme</h1>
        </header>
)
}