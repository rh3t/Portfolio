// Imports
import '@/styles/Navbar.css';

// Props
interface NavbarButtonProps {
    func?: () => void,
    children: React.ReactNode
}

// Component
export default function NavbarButton({func, children}: NavbarButtonProps){
    return(

        <p className = 'NavbarButton' onClick = {func}>
            {children}
        </p>

    )
}