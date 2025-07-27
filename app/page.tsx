// Import
import type { Metadata } from 'next';
import LandingIntro from '@/components/LandingIntro';
import RedirectButton from '@/components/RedirectButton';

// Meta
export const metadata: Metadata = {
    title: 'home | rh3t.dev'
}

// Component
const Index = () => {
    return(

        <div className = 'default-border' style = {{padding: '60px'}}>

<<<<<<< HEAD
<<<<<<< HEAD
            Hello, world!
        
        </>
=======
=======
>>>>>>> parent of cb5d39b (Commit v1.3a)
            <LandingIntro></LandingIntro>

            <div style = {{marginTop: 25, gap: 25}} className = 'flexbox-centered'>

                <RedirectButton iconSrc = '/images/github.svg' text = 'GitHub' url = 'https://github.com/rh3t'/>
                <RedirectButton iconSrc = 'images/twitter.svg' text = 'Twitter' url = 'https://x.com/rh3t_'/>

            </div>

            <div style = {{marginTop: 25, gap: 25}} className = 'flexbox-centered'>

                <RedirectButton iconSrc = '/images/monkeytype.svg' text = 'MonkeyType' url = 'https://monkeytype.com/profile/Rh3t_'/>
<<<<<<< HEAD
                <RedirectButton iconSrc = '/images/discord.svg' text = 'Discord' url = '/'/>
=======
                <RedirectButton iconSrc = '/images/discord.svg' text = 'Discord' url = 'https://discord.com/users/996964730252042320'/>
>>>>>>> parent of cb5d39b (Commit v1.3a)


            </div>

        </div>
<<<<<<< HEAD
>>>>>>> parent of d227463 (Commit v1.1.5)
=======
>>>>>>> parent of cb5d39b (Commit v1.3a)

    )
}

// Export
export default Index;