// Import
import './global.css';
import Navbar from '@/components/Navbar';
import SolarDecal from '@/components/SolarDecal';
import VersionLabel from '@/components/VersionLabel';

// Component
const RootLayout = ({children}: {children: React.ReactNode}) => {
    return(

        <html className = 'flexbox-centered'>
            <body>

                <div className = 'fade-in-animation'>
                    {children}
                </div>
                
                <Navbar></Navbar>
                <VersionLabel></VersionLabel>
                <SolarDecal size = {2000}></SolarDecal>

            </body>
        </html>

    )
}

// Export
export default RootLayout;