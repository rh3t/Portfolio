// Import
import './global.css';
import Navbar from '@/components/Navbar';
import SolarDecal from '@/components/SolarDecal';
import VersionLabel from '@/components/VersionLabel';
import GitHubButton from '@/components/GitHubButton';

// Component
export default function RootLayout({children}: {children: React.ReactNode}){
    return(

        <html className = 'flexbox-centered'>
            <body>

                {children}
                <Navbar></Navbar>
                <VersionLabel></VersionLabel>
                <GitHubButton></GitHubButton>
                <SolarDecal size = {2000}></SolarDecal>

            </body>
        </html>

    )
}