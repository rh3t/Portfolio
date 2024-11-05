// Import
import './styles/Navbar.css';
import NavbarButton from './NavbarButton';
import { pressedAbout, pressedArchive, pressedBlog, pressedHome } from '@/logic/Navigation';

// Component
export default function Navbar(){
    return(

        <div id = 'NavbarContainer' className = 'flexbox-centered'>
            ~
            <NavbarButton func = {pressedHome}>Home</NavbarButton>
            <NavbarButton func = {pressedAbout}>About</NavbarButton>
            <NavbarButton func = {pressedBlog}>Blog</NavbarButton>
            <NavbarButton func = {pressedArchive}>Archive</NavbarButton>
            ~
        </div>

    )
}