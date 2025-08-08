// Import
import './global.css';
import Version from '@/components/Version';
import { Roboto_Mono } from 'next/font/google';
import OrbitDecal from '@/components/OrbitDecal';
import Navigation from '@/components/Navigation';

// Font Handler
const Font = Roboto_Mono({
    subsets: ['latin']
})

// Component
const RootLayout = ({children}: {children: React.ReactNode}) => {
    return (

        <html lang = 'en' className = {`${Font.className} flex-center`}>
            <body>
                {children}
                <Version/>
                {/* <Navigation/> */}
                <OrbitDecal size = {2000}/>
            </body>
        </html>

    )
}

// Export
export default RootLayout;