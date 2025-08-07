import { useState, useEffect } from 'react';
import { Container, Typography, Box, Chip } from '@mui/material';
import CoachesList from "./CoachesList";
import HeaderComponent from '../../components/HeaderComponent';
import Testimonials from './Testimonials';

export default function Coaches() {
    document.title = 'Titan MMA - Coaches';
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <Box
            sx={{
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #0f0f0f 100%)',
                py: 6,
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

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10 }}>
                {/* Header Section */}
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <HeaderComponent
                        headingText='elite ufc coaches'
                        subHeadingText='Train with the legends who have produced UFC champions. Our certified trainers follow a strict UFC-approved curriculum, making them the best in the world.' />
                    
                    {/* Specializations */}
                    <Box 
                        sx={{ 
                            mb: 8,
                            transition: 'all 0.8s ease 0.6s',
                            transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
                            opacity: isLoaded ? 1 : 0
                        }}
                    >
                        <Typography 
                            variant="h5" 
                            sx={{ 
                                color: 'white',
                                mb: 3,
                                fontWeight: 700
                            }}
                        >
                            EXPERTISE AREAS
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
                            {['MMA', 'Boxing', 'Kickboxing', 'Muay Thai', 'Wrestling', 'Sambo', 'BJJ', 'Judo']
                            .map((specialty, index) => (
                                <Chip
                                    key={index}
                                    label={specialty}
                                    sx={{
                                        color: 'white',
                                        backgroundColor: 'rgba(226, 0, 0, 0.3)',
                                        border: '1px solid rgba(226, 0, 0, 0.5)',
                                        fontWeight: 600,
                                        fontSize: '1rem',
                                        py: 1,
                                        '&:hover': {
                                            backgroundColor: 'rgba(226, 0, 0, 0.5)',
                                            transform: 'scale(1.05)'
                                        },
                                        transition: 'all 0.3s ease'
                                    }}
                                />
                            ))}
                        </Box>
                    </Box>
                </Box>

                <Box 
                    sx={{ 
                        display: 'grid', 
                        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
                        gap: 4,
                        mb: 8,
                        transition: 'all 0.8s ease 0.8s',
                        transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
                        opacity: isLoaded ? 1 : 0
                    }}
                >
                    <CoachesList />
                </Box>
                <Box>
                    <Testimonials />
                </Box>

            </Container>
        </Box>
    );
}
