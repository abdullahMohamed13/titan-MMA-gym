import { useState, useEffect } from 'react';
// custom components
// MUI Components
import { Box } from '@mui/material';
import HeaderComponent from '../../components/HeaderComponent';
import ClassesList from './ClassesList';
import Gallery from './Gallery';
import FadeInOnScroll from '../../components/FadeInOnScroll';

export default function ClassesPage() {
    document.title = 'Titan MMA - Classes';
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return <Box
                sx={{
                    pt: 6,
                    minHeight: '100vh',
                    background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #0f0f0f 100%)',
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
                {/* Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className={`absolute top-20 left-10 w-64 h-64 bg-red-500/5 rounded-full blur-3xl transition-all duration-2000 ${isLoaded ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}></div>
                    <div className={`absolute bottom-20 right-10 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl transition-all duration-2000 delay-500 ${isLoaded ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}></div>
                    <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-yellow-500/5 rounded-full blur-3xl transition-all duration-2000 delay-1000 ${isLoaded ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}></div>
                </div>

                {/* Classes Section */}
                <Box mb='6'>
                    <HeaderComponent 
                        headingText='ELITE MMA CLASSES'
                        subHeadingText='Train with UFC champions and world-class coaches. Choose your path to greatness.'
                    />
                    <FadeInOnScroll><ClassesList isLoaded={isLoaded} /></FadeInOnScroll>
                </Box>

                {/* Gallery Section */}
                <FadeInOnScroll><Gallery /></FadeInOnScroll>
        </Box>
}
