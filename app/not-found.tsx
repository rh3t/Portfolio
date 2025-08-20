// Import
import Button from '@/components/Button';
import type { Metadata } from 'next';

// Meta Handler
export const metadata: Metadata = {
    title: '404 / rh3t.dev'
}

// Component
const NotFound = () => {
    return (

        <div className = 'bordered-container slide-in-bottom flex-center' style = {{padding: '50px', flexDirection: 'column'}}>
            
            <div style = {{fontSize: '30px'}}>
                404 - Not Found
            </div>

            <div style = {{width: '300px', marginTop: '5px'}}>
                This item has either been moved or no longer exists.
            </div>

        </div>

    )
}

// Export
export default NotFound;