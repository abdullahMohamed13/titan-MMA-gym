import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
// custom components
import { initialClasses } from '../../features/slices/classesSlice';
// MUI Components
import {  Card,  CardContent,  Typography,  Container,  Box,  Button,  Chip,  Paper, Stack, Avatar,
    Divider } from '@mui/material';
// MUI Icons
import SportsMmaIcon from '@mui/icons-material/SportsMma';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import HeaderComponent from '../../components/HeaderComponent';

export default function Classes() {
    document.title = 'Titan MMA - Classes';
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const getClassIcon = (className: string) => {
        const name = className.toLowerCase();
        if (name.includes('mma') || name.includes('fundamentals')) return <SportsMmaIcon sx={{ fontSize: 40, color: '#e20000' }} />;
        if (name.includes('striking') || name.includes('muay thai')) return <LocalFireDepartmentIcon sx={{ fontSize: 40, color: '#ff6b35' }} />;
        if (name.includes('wrestling') || name.includes('bjj')) return <FitnessCenterIcon sx={{ fontSize: 40, color: '#2ecc71' }} />;
        return <EmojiEventsIcon sx={{ fontSize: 40, color: '#f1c40f' }} />;
    };

    const getLevelColor = (level: string) => {
        switch (level) {
            case 'Beginner': return '#27ae60';
            case 'Intermediate': return '#f39c12';
            case 'Advanced': return '#e74c3c';
            default: return '#95a5a6';
        }
    };

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
                        headingText='ELITE MMA CLASSES'
                        subHeadingText='Train with UFC champions and world-class coaches. Choose your path to greatness.'
                    />
                    
                    {/* Stats Row */}
                    <Box 
                        sx={{ 
                            display: 'grid', 
                            gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
                            gap: 3,
                            mb: 8,
                            transition: 'all 0.8s ease 0.4s',
                            transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
                            opacity: isLoaded ? 1 : 0
                        }}
                    >
                        {[
                            { icon: '🥊', label: 'Total Classes', value: initialClasses.length.toString() },
                            { icon: '⚡', label: 'Skill Levels', value: '3' },
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

                {/* Classes Grid */}
                <Box 
                    sx={{ 
                        display: 'grid', 
                        gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                        gap: 4
                    }}
                >
                    {initialClasses.map((c, index) => (
                        <Box key={index}>
                            <Card
                                sx={{
                                    height: '100%',
                                    background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                                    border: '2px solid rgba(255, 255, 255, 0.1)',
                                    backdropFilter: 'blur(10px)',
                                    borderRadius: 4,
                                    overflow: 'hidden',
                                    transition: 'all 0.3s ease',
                                    transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
                                    opacity: isLoaded ? 1 : 0,
                                    animationDelay: `${index * 0.1}s`,
                                    '&:hover': {
                                        transform: 'translateY(-8px) scale(1.02)',
                                        boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                                        border: '2px solid rgba(226, 0, 0, 0.3)'
                                    }
                                }}
                            >
                                {/* Image Section */}
                                <Box sx={{ position: 'relative', height: 200, overflow: 'hidden' }}>
                                    <img
                                        src={c.imgSrc}
                                        alt={c.name}
                                        loading="lazy"
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            transition: 'transform 0.3s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'scale(1.1)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'scale(1)';
                                        }}
                                    />
                                    {/* Overlay with Level Badge */}
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: 16,
                                            right: 16,
                                            background: getLevelColor(c.level),
                                            color: 'white',
                                            px: 2,
                                            py: 0.5,
                                            borderRadius: 2,
                                            fontSize: '0.875rem',
                                            fontWeight: 700,
                                            boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
                                        }}
                                    >
                                        {c.level}
                                    </Box>
                                    {/* Price Badge */}
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: 16,
                                            left: 16,
                                            background: 'rgba(0,0,0,0.8)',
                                            color: 'white',
                                            px: 2,
                                            py: 0.5,
                                            borderRadius: 2,
                                            fontSize: '1rem',
                                            fontWeight: 700,
                                            backdropFilter: 'blur(10px)'
                                        }}
                                    >
                                        ${c.price}
                                    </Box>
                                </Box>

                                <CardContent sx={{ p: 3 }}>
                                    {/* Header with Icon */}
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                                        {getClassIcon(c.name)}
                                        <Typography 
                                            variant="h5" 
                                            component="h2"
                                            sx={{ 
                                                fontWeight: 800,
                                                color: 'white',
                                                flex: 1
                                            }}
                                        >
                                            {c.name}
                                        </Typography>
                                    </Box>

                                    {/* Description */}
                                    <Typography 
                                        variant="body1" 
                                        sx={{ 
                                            color: '#e0e0e0',
                                            mb: 3,
                                            lineHeight: 1.6
                                        }}
                                    >
                                        {c.description}
                                    </Typography>

                                    {/* Coach Info */}
                                    <Box sx={{ mb: 3 }}>
                                        <Typography 
                                            component={Link} 
                                            to={c.coach.coachUrl}
                                            sx={{
                                                color: '#ff6b35',
                                                textDecoration: 'none',
                                                fontWeight: 600,
                                                fontSize: '1rem',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 1,
                                                '&:hover': {
                                                    color: '#ff8c42',
                                                    textDecoration: 'underline'
                                                }
                                            }}
                                        >
                                            <Avatar sx={{ width: 32, height: 32, fontSize: '0.75rem' }}>
                                                <img
                                                src={c.coach.coachImg}
                                                alt={`${c.coach.coachName} Photo`}
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
                                            {c.coach.coachName}
                                        </Typography>
                                    </Box>

                                    {/* Target Audience */}
                                    <Box sx={{ mb: 3 }}>
                                        <Typography 
                                            variant="subtitle2" 
                                            sx={{ 
                                                color: 'white', 
                                                mb: 1,
                                                fontWeight: 600
                                            }}
                                        >
                                            🎯 Perfect For:
                                        </Typography>
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                            {c.targetAudience.map((audience, index) => (
                                                <Chip 
                                                    key={index}
                                                    label={audience} 
                                                    size="small"
                                                    sx={{
                                                        color: 'white',
                                                        backgroundColor: 'rgba(226, 0, 0, 0.3)',
                                                        border: '1px solid rgba(226, 0, 0, 0.5)',
                                                        fontWeight: 500,
                                                        '&:hover': {
                                                            backgroundColor: 'rgba(226, 0, 0, 0.5)'
                                                        }
                                                    }} 
                                                />
                                            ))}
                                        </Box>
                                    </Box>

                                    <Divider sx={{ my: 2, borderColor: 'rgba(255,255,255,0.1)' }} />

                                    {/* Action Buttons */}
                                    <Stack direction="row" spacing={2}>
                                        <Button
                                            variant="contained"
                                            fullWidth
                                            sx={{
                                                background: 'linear-gradient(45deg, #e20000, #ff6b35)',
                                                color: 'white',
                                                fontWeight: 700,
                                                py: 1.5,
                                                borderRadius: 2,
                                                textTransform: 'none',
                                                boxShadow: '0 8px 25px rgba(226, 0, 0, 0.3)',
                                                '&:hover': {
                                                    background: 'linear-gradient(45deg, #c10000, #e55a2b)',
                                                    transform: 'translateY(-2px)',
                                                    boxShadow: '0 12px 35px rgba(226, 0, 0, 0.4)'
                                                },
                                                transition: 'all 0.3s ease'
                                            }}
                                        >
                                            🥊 Book Class
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            fullWidth
                                            sx={{
                                                borderColor: 'rgba(255,255,255,0.3)',
                                                color: 'white',
                                                fontWeight: 600,
                                                py: 1.5,
                                                borderRadius: 2,
                                                textTransform: 'none',
                                                '&:hover': {
                                                    borderColor: '#e20000',
                                                    backgroundColor: 'rgba(226, 0, 0, 0.1)'
                                                },
                                                transition: 'all 0.3s ease'
                                            }}
                                        >
                                            📖 Learn More
                                        </Button>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Box>
                    ))}
                </Box>

                {/* Bottom CTA */}
                <Box 
                    sx={{ 
                        textAlign: 'center', 
                        mt: 8,
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
                        READY TO START YOUR TRAINING?
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}
