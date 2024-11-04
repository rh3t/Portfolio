// Import
import '@/styles/Navbar.css';
import NavbarButton from './NavbarButton';

// Component
export default function Navbar(){
    return(

        <div id = 'NavbarContainer' className = 'flexbox-centered'>
            ~
            <NavbarButton>Home</NavbarButton>
            <NavbarButton>About</NavbarButton>
            <NavbarButton>Blog</NavbarButton>
            <NavbarButton>Archive</NavbarButton>
            ~
        </div>

    )
}