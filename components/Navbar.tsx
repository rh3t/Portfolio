// Import
"use client";
import './styles/Navbar.css';

// Component
const Navbar = () => {
    return(

        <div id = 'NavbarContainer' className = 'flexbox-centered'>
            ~
            <NavbarButton page = '/'>Home</NavbarButton>
            <NavbarButton page = '/about'>About</NavbarButton>
            <NavbarButton page = '/projects'>Projects</NavbarButton>
            ~
        </div>

    )
}

// Navbar Button
interface NavbarButtonProps {
    page: string,
    children: React.ReactNode
}

const NavbarButton = ({page, children}: NavbarButtonProps) => {

    const handleClick = () => {
        location.pathname = `/${page}`
    }

    return(

        <p className = 'NavbarButton' onClick = {handleClick}>
            {children}
        </p>

    )
}

// Export
export default Navbar;