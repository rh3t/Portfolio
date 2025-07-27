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
            <NavbarButton archive = {true} page = '/'>Archive</NavbarButton>
            ~
        </div>

    )
}

// Navbar Button
interface NavbarButtonProps {
    page: string,
    children: string,
    archive?: boolean
}

const NavbarButton = ({page, children, archive}: NavbarButtonProps) => {

    const handleClick = () => {

        if (archive) {
            window.open('https://archive.rh3t.dev')
        } else {
            location.pathname = page;
        }
    }

    return(

        <p className = 'NavbarButton' onClick = {handleClick}>
            {children}
        </p>

    )
}

// Export
export default Navbar;