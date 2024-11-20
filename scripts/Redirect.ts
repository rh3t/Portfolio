// Redirect Script
const handleRedirect = (url: string) => {
    if (typeof window !== 'undefined'){
        window.open(url);
    }
}

// Export
export default handleRedirect;