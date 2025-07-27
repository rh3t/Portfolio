// Import
import type { Metadata } from 'next';
import RedirectButton from '@/components/RedirectButton';

// Meta
export const metadata: Metadata = {
    title: '404 | rh3t.dev'
}

// Component
const NotFound = () => {
    return(

        <div className = 'default-border fade-in' style = {{padding: '40px'}}>
            
            <p style = {{
                margin: '0px 0px 15px 0px', 
                fontSize: 50, 
                textAlign: 'center'
            }}>
                404
            </p>
            <RedirectButton text = 'Go Home' iconSrc = '/images/backArrow.svg' url = '/'/>

        </div>

    )
}

// Export
export default NotFound;