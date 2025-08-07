import { useParams } from 'react-router-dom';
import { Container, Box, Typography, Link, Chip, Button, Paper, Avatar, Divider } from '@mui/material';
import { initialCoaches } from '../../../features/slices/coachesSlice';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import SportsMmaIcon from '@mui/icons-material/SportsMma';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import StarIcon from '@mui/icons-material/Star';
import { Link as RouterLink } from 'react-router-dom';

export default function CoachProfile() {
    const { name } = useParams();
    const decodedName = name ? decodeURIComponent(name) : 'Unknown';
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    document.title = `Titan MMA - Coach ${decodedName}`;
    const currentCoach = initialCoaches.find(coach => coach.name === decodedName);
    console.log(currentCoach!.img);

    const getCoachIcon = (coachName: string) => {
        const name = coachName.toLowerCase();
        if (name.includes('khabib') || name.includes('wrestling')) return <SportsMmaIcon sx={{ fontSize: 50, color: '#2ecc71' }} />;
        if (name.includes('kayla') || name.includes('judo')) return <EmojiEventsIcon sx={{ fontSize: 50, color: '#f1c40f' }} />;
        if (name.includes('javier') || name.includes('mendez')) return <StarIcon sx={{ fontSize: 50, color: '#e20000' }} />;
        return <SportsMmaIcon sx={{ fontSize: 50, color: '#ff6b35' }} />;
    };

    const breadcrumbs = [
        <Link 
            component={RouterLink}
            underline="hover" 
            key="1" 
            color="inherit" 
            to="/"
            sx={{ color: '#b0b0b0', '&:hover': { color: 'white' } }}
        >
          Home
        </Link>,
        <Link
            component={RouterLink}
            underline="hover"
            key="2"
            color="inherit"
            to="/coaches"
            sx={{ color: '#b0b0b0', '&:hover': { color: 'white' } }}
        >
          Coaches
        </Link>,
        <Typography key="3" sx={{ color: 'white' }}>
          {decodedName}
        </Typography>,
    ];

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
            </div>

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10 }}>
                {/* Breadcrumbs */}
                <Breadcrumbs
                    separator={<NavigateNextIcon fontSize="small" sx={{ color: '#b0b0b0' }} />}
                    aria-label="breadcrumb"
                    sx={{ mb: 4 }}
                >
                    {breadcrumbs}
                </Breadcrumbs>

                {currentCoach ? (
                    <AnimatePresence mode="sync">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            key={currentCoach.id}
                        >
                            <Paper
                                elevation={8}
                                sx={{
                                    background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                                    border: '2px solid rgba(255, 255, 255, 0.1)',
                                    backdropFilter: 'blur(10px)',
                                    borderRadius: 4,
                                    overflow: 'hidden',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                                        border: '2px solid rgba(226, 0, 0, 0.3)'
                                    }
                                }}
                            >
                                <Box sx={{ p: 6 }}>
                                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
                                        {/* Image Section */}
                                        <Box sx={{ flexShrink: 0 }}>
                                            <Box sx={{ position: 'relative' }}>
                                                <img 
                                                    loading="lazy" 
                                                    src={currentCoach.img} 
                                                    alt={`Coach ${currentCoach.name} Photo`}
                                                    style={{
                                                        width: 400,
                                                        height: 400,
                                                        objectFit: 'cover',
                                                        borderRadius: 16,
                                                        border: '4px solid rgba(226, 0, 0, 0.3)',
                                                        boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                                                        transition: 'all 0.3s ease'
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        e.currentTarget.style.transform = 'scale(1.05)';
                                                        e.currentTarget.style.borderColor = 'rgba(226, 0, 0, 0.6)';
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.currentTarget.style.transform = 'scale(1)';
                                                        e.currentTarget.style.borderColor = 'rgba(226, 0, 0, 0.3)';
                                                    }}
                                                />
                                                {/* Icon Overlay */}
                                                <Box
                                                    sx={{
                                                        position: 'absolute',
                                                        top: 16,
                                                        right: 16,
                                                        background: 'rgba(0,0,0,0.8)',
                                                        color: 'white',
                                                        p: 2,
                                                        borderRadius: '50%',
                                                        backdropFilter: 'blur(10px)'
                                                    }}
                                                >
                                                    {getCoachIcon(currentCoach.name)}
                                                </Box>
                                            </Box>
                                        </Box>

                                        {/* Content Section */}
                                        <Box sx={{ flex: 1 }}>
                                            {/* Header */}
                                            <Box sx={{ mb: 4 }}>
                                                <Typography 
                                                    variant="h2" 
                                                    component="h1"
                                                    sx={{
                                                        fontWeight: 900,
                                                        background: 'linear-gradient(45deg, #e20000, #ff6b35)',
                                                        backgroundClip: 'text',
                                                        WebkitBackgroundClip: 'text',
                                                        WebkitTextFillColor: 'transparent',
                                                    }}
                                                >
                                                    Coach {currentCoach.name}
                                                </Typography>
                                                <Typography 
                                                    variant='subtitle1'
                                                    sx={{mb: 2}}
                                                >
                                                    {currentCoach.title}
                                                </Typography>
                                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                                                    {currentCoach.specials.map((special, index) => (
                                                        <Chip
                                                            key={index}
                                                            label={special}
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

                                            {/* Description */}
                                            <Typography 
                                                variant="body1" 
                                                sx={{ 
                                                    color: '#e0e0e0',
                                                    mb: 4,
                                                    lineHeight: 1.8,
                                                    fontSize: '1.1rem'
                                                }}
                                            >
                                                {currentCoach.description}
                                            </Typography>

                                            <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.1)' }} />

                                            {/* Action Buttons */}
                                            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                                                <Button
                                                    component="a"
                                                    href={currentCoach.article}
                                                    target="_blank"
                                                    variant="contained"
                                                    startIcon={<OpenInNewIcon />}
                                                    sx={{
                                                        background: 'linear-gradient(45deg, #e20000, #ff6b35)',
                                                        color: 'white',
                                                        fontWeight: 700,
                                                        px: 4,
                                                        py: 2,
                                                        borderRadius: 3,
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
                                                    Read More About {currentCoach.gender === false ? 'Her' : 'Him'}
                                                </Button>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Paper>
                        </motion.div>
                    </AnimatePresence>
                ) : (
                    <Paper
                        elevation={8}
                        sx={{
                            p: 6,
                            textAlign: 'center',
                            background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                            border: '2px solid rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(10px)',
                            borderRadius: 4
                        }}
                    >
                        <Typography 
                            variant="h4" 
                            sx={{ 
                                color: 'white',
                                mb: 2
                            }}
                        >
                            Coach Not Found
                        </Typography>
                        <Typography 
                            variant="body1" 
                            sx={{ 
                                color: '#b0b0b0',
                                mb: 4
                            }}
                        >
                            Coach "{decodedName}" was not found in our database.
                        </Typography>
                        <Button
                            component={RouterLink}
                            to="/coaches"
                            variant="contained"
                            sx={{
                                background: 'linear-gradient(45deg, #e20000, #ff6b35)',
                                color: 'white',
                                fontWeight: 700,
                                px: 4,
                                py: 2,
                                borderRadius: 3,
                                textTransform: 'none',
                                '&:hover': {
                                    background: 'linear-gradient(45deg, #c10000, #e55a2b)'
                                }
                            }}
                        >
                            View All Coaches
                        </Button>
                    </Paper>
                )}
            </Container>
        </Box>
    );
}
