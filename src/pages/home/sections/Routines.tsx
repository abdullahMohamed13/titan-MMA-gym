import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
// custom components
import HeaderComponent from '../../../components/HeaderComponent';
import { initialClasses } from '../../../features/slices/classesSlice';
// React bits
import ScrollStack, { ScrollStackItem } from '../../../components/animated/ScrollStack'
// MUI Components
import { Box, Container } from "@mui/system";
import { Chip, Typography, Paper, Avatar } from '@mui/material';
// MUI Icons
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SportsMmaIcon from '@mui/icons-material/SportsMma';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

export default function Routines() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true)
    }, [])
    
    const getRoutineIcon = (routineName: string) => {
        const name = routineName.toLowerCase();
        if (name.includes('mma') || name.includes('fighting')) return <SportsMmaIcon sx={{ fontSize: 40, color: '#e20000' }} />;
        if (name.includes('conditioning') || name.includes('strength')) return <LocalFireDepartmentIcon sx={{ fontSize: 40, color: '#ff6b35' }} />;
        if (name.includes('fitness') || name.includes('training')) return <FitnessCenterIcon sx={{ fontSize: 40, color: '#2ecc71' }} />;
        return <EmojiEventsIcon sx={{ fontSize: 40, color: '#f1c40f' }} />;
    };

    return (
        <Box
            component="section"
            sx={{
                py: { xs: 4, md: 6 },
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

            <Container sx={{ py: 4, width: '100%', position: 'relative', zIndex: 10 }}>
                {/* Header Section */}
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <HeaderComponent
                        headingText='unlock your fighting potential'
                        subHeadingText='Discover our elite training programs designed by UFC champions and world-class coaches.' />

                    {/* Stats Row */}
                    <Box 
                        sx={{ 
                            display: 'grid', 
                            gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
                            gap: 3,
                            transition: 'all 0.8s ease 0.4s',
                            transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
                            opacity: isLoaded ? 1 : 0
                        }}
                    >
                        {[
                            { icon: <SportsMmaIcon sx={{fontSize: '32px'}} color='primary' /> , label: 'MMA Classes', value: '5' },
                            { icon: '🏆', label: 'UFC Champions', value: '10' },
                            { icon: '⚡', label: 'Skill Levels', value: 'All' },
                            { icon: '🔥', label: 'Active Students', value: '500+' }
                        ].map((stat, index) => (
                            <Paper
                                key={index}
                                elevation={8}
                                sx={{
                                    p: 3,
                                    textAlign: 'center',
                                    background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    backdropFilter: 'blur(10px)',
                                    borderRadius: 3,
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-5px)',
                                        boxShadow: '0 15px 35px rgba(0,0,0,0.3)',
                                        border: '1px solid rgba(226, 0, 0, 0.3)'
                                    }
                                }}
                            >
                                <div className="text-3xl mb-2">{stat.icon}</div>
                                <Typography variant="h4" sx={{ color: 'white', fontWeight: 700, mb: 1 }}>
                                    {stat.value}
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
                                    {stat.label}
                                </Typography>
                            </Paper>
                        ))}
                    </Box>
                </Box>

                {/* Routines Section */}
                <Box 
                    className="scroll-stack-container" 
                    sx={{ 
                        height: '80vh', 
                        transition: 'all 0.8s ease 0.6s',
                        transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
                        opacity: isLoaded ? 1 : 0
                    }}
                >
                    <ScrollStack className='text-white'>
                        {initialClasses.slice(0, 4).map((routine, index) => (
                            <ScrollStackItem 
                                key={index}
                                className="flex flex-col lg:flex-row justify-between gap-4 sm:gap-6" 
                                style={{ 
                                    backgroundColor: routine.cardBgColor,
                                    borderRadius: 16,
                                    border: '2px solid rgba(255, 255, 255, 0.1)',
                                    backdropFilter: 'blur(10px)',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                                }}
                            >
                                <Box sx={{ flex: 1, minWidth: 0 }}>
                                    {/* Header with Icon */}
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, sm: 2 }, mb: { xs: 2, sm: 3 } }}>
                                        <Box sx={{ flexShrink: 0 }}>
                                            {getRoutineIcon(routine.name)}
                                        </Box>
                                        <Typography 
                                            variant="h4" 
                                            sx={{ 
                                                fontWeight: 800,
                                                color: 'white',
                                                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                                                fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem', lg: '2.125rem' },
                                                lineHeight: 1.2
                                            }}
                                        >
                                            {routine.name}
                                        </Typography>
                                    </Box>

                                    {/* Description */}
                                    <Typography 
                                        variant="body1"
                                        color='textPrimary'
                                        sx={{ 
                                            mb: { xs: 2, sm: 3, md: 4 },
                                            lineHeight: 1.5,
                                            fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' }
                                        }}
                                    >
                                        {routine.description}
                                    </Typography>

                                    {/* Coach Info */}
                                    <Box sx={{ mb: { xs: 2, sm: 3 } }}>
                                        <Typography 
                                            component={Link}
                                            to={routine.coach.coachUrl}
                                            sx={{
                                                color: '#ffc635',
                                                textDecoration: 'none',
                                                fontWeight: 600,
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: { xs: '6px', sm: '10px' },
                                                fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
                                                '&:hover': {
                                                    color: '#ff8c42',
                                                    textDecoration: 'underline'
                                                }
                                            }}
                                        >
                                            <Avatar sx={{ 
                                                width: { xs: 28, sm: 32 }, 
                                                height: { xs: 28, sm: 32 }, 
                                                fontSize: '0.75rem' 
                                            }}>
                                                <img
                                                    src={routine.coach.coachImg}
                                                    alt={`${routine.coach.coachName} Photo`}
                                                    loading="lazy"
                                                    className='hover:scale-[1.1]'
                                                    style={{
                                                        width: '100%',
                                                        height: '100%',
                                                        objectFit: 'cover',
                                                        transition: 'transform 0.3s ease'
                                                    }}
                                                />
                                            </Avatar>
                                            <Box component="span" sx={{ minWidth: 0 }}>
                                                Coach: {routine.coach.coachName}
                                            </Box>
                                        </Typography>
                                    </Box>

                                    {/* Target Audience */}
                                    <Box sx={{ mb: { xs: 2, sm: 4 } }}>
                                        <Typography 
                                            variant="h6" 
                                            sx={{ 
                                                color: 'white', 
                                                mb: { xs: 1, sm: 2 },
                                                fontWeight: 600,
                                                fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' }
                                            }}
                                        >
                                            🎯 Perfect For:
                                        </Typography>
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 0.5, sm: 1 } }}>
                                            {routine.targetAudience.map((ta, index) => (
                                                <Chip 
                                                    key={index}
                                                    label={ta} 
                                                    sx={{
                                                        color: 'white',
                                                        backgroundColor: 'rgba(226, 0, 0, 0.3)',
                                                        border: '1px solid rgba(226, 0, 0, 0.5)',
                                                        fontWeight: 600,
                                                        fontSize: { xs: '0.75rem', sm: '0.8125rem' },
                                                        height: { xs: 24, sm: 32 },
                                                        '&:hover': {
                                                            backgroundColor: 'rgba(226, 0, 0, 0.5)'
                                                        }
                                                    }} 
                                                    variant="filled" 
                                                />
                                            ))}
                                        </Box>
                                    </Box>
                                </Box>

                                {/* Image - Responsive sizing */}
                                <Box sx={{ 
                                    flexShrink: 0, 
                                    width: '100%',
                                    maxWidth: { xs: '100%', lg: 250 },
                                    display: 'flex',
                                    justifyContent: 'center',
                                    mt: { xs: 2, lg: 0 }
                                }}>
                                    <img
                                        loading="lazy"
                                        src={routine.imgSrc} 
                                        className='rounded-2xl border-4 border-red-500/50 shadow-2xl'
                                        style={{
                                            width: '100%',
                                            maxWidth: 250,
                                            height: 'auto',
                                            aspectRatio: '5/4',
                                            objectFit: 'cover',
                                            transition: 'all 0.3s ease'
                                        }}
                                        alt={`${routine.name} Routine`} 
                                    />
                                </Box>
                            </ScrollStackItem>
                        ))}
                    </ScrollStack>
                </Box>

                {/* Bottom CTA */}
                <Box 
                    sx={{ 
                        textAlign: 'center', 
                        mt: 3,
                        transition: 'all 0.8s ease 0.8s',
                        transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
                        opacity: isLoaded ? 1 : 0
                    }}
                >
                    <Typography 
                        variant="h5" 
                        sx={{ 
                            color: 'white',
                            fontWeight: 700
                        }}
                    >
                        READY TO START YOUR JOURNEY?
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}
