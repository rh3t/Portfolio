// Import
import type { Metadata } from 'next';
import Button from '@/components/Button';
import { sendToHome } from '@/logic/Buttons';

// Meta
export const metadata: Metadata = {
    title: '404 | rh3t.dev'
}

// Component
export default function NotFound(){
    return(

        <div className = 'default-border fade-in' style = {{padding: '40px'}}>
            
            <p style = {{
                margin: '0px 0px 15px 0px', 
                fontSize: 50, 
                textAlign: 'center' 
            }}>
                404
            </p>
            <Button func = {sendToHome}>Go Home</Button>

        </div>

    )
}