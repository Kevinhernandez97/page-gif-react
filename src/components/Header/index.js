import { Link } from "wouter";
import useUser from "../hooks/useUser";
import './index.css'

export default function Header() {
    const {isLogged, logout} = useUser()

    const handleClick = e => {
        e.preventDefault()
        logout()
    }
    return (
        <header className='gf-header'>
            {
            isLogged
            ? <Link href="#" onClick={handleClick}>
            logout            
            </Link>
            : 
            <Link to='/login'>
             Login            
            </Link>
            }
        </header>
    )
}