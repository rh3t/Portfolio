// Import
import './global.css';
import Navbar from '@/components/Navbar';
import SolarDecal from '@/components/SolarDecal';
import RepoButton from '@/components/RepoButton';
import VersionLabel from '@/components/VersionLabel';

// Component
export default function RootLayout({children}: {children: React.ReactNode}){
    return(

        <html className = 'flexbox-centered'>
            <body>

                {children}
                <Navbar></Navbar>
                <RepoButton></RepoButton>
                <VersionLabel></VersionLabel>
                <SolarDecal size = {2000}></SolarDecal>

            </body>
        </html>

    )
}